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
  let text = '审核中'
    switch(state){
      case 0:  text = '审核中';break;
      case 1:  text = '已接手';break;
      case 2:  text = '已完成';break;
      case 3:  text = '被拒绝';break;
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

exports.statusDesc = (status) =>{
  switch(status) {
    case 0: 
      return '未支付';
    case 1:
      return '等待审阅';
    case 2:
      return '已完成';
    case 3:
      return '已拒绝';
  }
  return '';
}

exports.moneyAsYuan = (money) => {
  if (!money) {
    return 0;
  } else {
    return money / 1000;
  }
}