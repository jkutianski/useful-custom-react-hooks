import { useState } from "react"

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray(a => [...a, element])
  }

  function filter(callback) {
    setArray(a => a.filter(callback))
  }

  function update(index, newElement) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
  }

  function clear() {
    setArray([])
  }

  return [ array, setArray, push, filter, update, remove, clear ]
}
