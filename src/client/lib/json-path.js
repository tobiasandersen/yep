import { shallowCopy, deepEquals } from './utils'

const cache = Object.create(null)
const PARTS_REG_EXP = /([^\.\[\]\s]+)/g

export function get (data, path) {
  let tokens = tokenize(path)

  for (let i = 0; i < tokens.length; i++) {
    if (data === undefined) {
      return undefined
    }
    if (typeof data !== 'object') {
      throw new Error('invalid data or path')
    }
    data = data[tokens[i]]
  }

  return data
}

export function set (data, path, value) {
  let tokens = tokenize(path)

  if (tokens.length === 0) {
    return patch(data, value)
  }

  let oldValue = get(data, path, false)
  let newValue = patch(oldValue, value)

  if (newValue === oldValue) {
    return data
  }

  let result = shallowCopy(data)

  let node = result
  for (let i = 0; i < tokens.length; i++) {
    if (i === tokens.length - 1) {
      node[tokens[i]] = newValue
    } else if (node[tokens[i]] !== undefined) {
      node = node[tokens[i]] = shallowCopy(node[tokens[i]])
    } else if (tokens[i + 1] && !isNaN(tokens[i + 1])) {
      node = node[tokens[i]] = []
    } else {
      node = node[tokens[i]] = Object.create(null)
    }
  }

  return result
}

export function patch (oldValue, newValue) {
  if (deepEquals(oldValue, newValue)) {
    return oldValue
  } else if (Array.isArray(oldValue) && Array.isArray(newValue)) {
    let arr = []
    for (let i = 0; i < newValue.length; i++) {
      arr[i] = patch(oldValue[i], newValue[i])
    }
    return arr
  } else if (!Array.isArray(newValue) && typeof oldValue === 'object' && typeof newValue === 'object') {
    let props = Object.keys(newValue)
    let obj = Object.create(null)
    for (let i = 0; i < props.length; i++) {
      obj[props[i]] = patch(oldValue[props[i]], newValue[props[i]])
    }
    return obj
  } else {
    return newValue
  }
}

function tokenize (path) {
  let tokens = cache[path]

  if (!tokens) {
    let parts = path !== undefined ? String(path).match(PARTS_REG_EXP) : []

    if (!parts) {
      throw new Error('invalid path ' + path)
    }

    tokens = parts.map((part) => !isNaN(part) ? parseInt(part, 10) : part)

    cache[path] = tokens
  }

  return tokens
}
