export function deepCopy (obj) {
  if (typeof obj === 'object') {
    return JSON.parse(JSON.stringify(obj))
  } else {
    return obj
  }
}

export function shallowCopy (obj) {
  if (Array.isArray(obj)) {
    return obj.slice(0)
  } else if (typeof obj === 'object') {
    let copy = Object.create(null)
    let props = Object.keys(obj)
    for (let i = 0; i < props.length; i++) {
      copy[props[i]] = obj[props[i]]
    }
    return copy
  }
  return obj
}

export function deepEquals (objA, objB) {
  if (objA === objB) {
    return true
  } else if (typeof objA !== 'object' || typeof objB !== 'object') {
    return false
  } else {
    return JSON.stringify(objA) === JSON.stringify(objB)
  }
}
