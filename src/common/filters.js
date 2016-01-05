const urlParser = document.createElement('a')

exports.domain = (url) => {
  urlParser.href = url
  return urlParser.hostname
}

exports.fromNow =  (time) => {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

exports.reviewStatus = (state) => {
  let text = '未知'
    switch(state){
      case 'unpaid':  text = '未打赏';break;
      case 'paid':  text = '等待审阅';break;
      case 'finished':  text = '已完成';break;
      case 'consented': text = '已接手';break;
      case 'rejected':  text = '已拒绝';break;
    }
    return text;
}

exports.integer = (val) =>{
  return val.split('.')[0]
}


exports.pluralize = (time, label) =>{
    if (time === 1) {
        return time + label
    }

    return time + label + 's';
}

exports.moneyAsYuan = (money) => {
  if (!money) {
    return 0;
  } else {
    return money / 100;
  }
}
