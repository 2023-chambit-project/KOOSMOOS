export const debounce = (callbackFunc: VoidFunction, delay: number) => {
  let timerId: NodeJS.Timeout
  return () => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callbackFunc()
    }, delay)
  }
}
export const throttle = (callbackFunc: VoidFunction, delay: number) => {
  let waiting = true
  return () => {
    if (waiting) {
      callbackFunc()
      waiting = false
      setTimeout(() => {
        waiting = true
      }, delay)
    }
  }
}
