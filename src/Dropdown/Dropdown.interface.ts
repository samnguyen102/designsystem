import { ChangeEventHandler, HTMLProps } from 'react'

export default interface DropdownProps {
  id?: string
  classList?: string[]
  options: DropdownOption[]
  value: string
  style?: Record<string, string | number>
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined
}

interface DropdownOption {
  value: string
  label: string
}
