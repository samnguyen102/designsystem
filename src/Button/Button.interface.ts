import { HTMLProps, ReactNode, MouseEventHandler } from 'react'

export default interface Button
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  id?: string
  type?: 'solid' | 'outline' | 'text'
  size?: 'small' | 'medium' | 'large'
  color?: 'white' | 'black' | 'blue' | 'red'
  fullWidth?: boolean
  className?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
