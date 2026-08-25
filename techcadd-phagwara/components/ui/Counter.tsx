'use client'

import { useCounter } from '@/hooks/useCounter'

export interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

/** Number that counts up the first time it scrolls into view. */
export default function Counter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: CounterProps) {
  const { ref, display } = useCounter(value, { decimals })

  return (
    <span ref={ref} className={`counter ${className}`.trim()}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
