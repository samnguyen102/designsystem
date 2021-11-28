import { ChangeEventHandler, HTMLProps } from 'react'

export default interface InputProps extends HTMLProps<HTMLInputElement> {
  id?: string
  className?: string
  type?: 'text' | 'number' | 'tel'
  label: string
  value: string
  error?: boolean
  validated?: boolean
  style?: Record<string, string | number>
  numRows?: number | undefined
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}
