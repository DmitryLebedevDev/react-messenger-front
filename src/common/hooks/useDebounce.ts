import { useState } from 'react'

export const useDebounceFn = <A extends any[]>
(func: (...args: A) => any, milliseconds: number) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout>(0 as any)

  return (...args: A): void => {
    clearTimeout(timerId)
    setTimerId(setTimeout(() => func(...args), milliseconds))
  }
}