const urlParser = document.createElement('a')

export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}

export function fromNow (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function pluralize(time, label) {
    if (time === 1) {
        return time + label
    }

    return time + label + 's';
}

export function statusDesc(status) {
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
