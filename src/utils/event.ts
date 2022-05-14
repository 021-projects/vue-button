export function stopAndPrevent ( e: Event ) {
  e.cancelable && e.preventDefault()
  e.stopPropagation()
}