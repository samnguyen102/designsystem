import { HTMLProps, ReactNode } from 'react'

export default interface Text extends Omit<HTMLProps<HTMLDivElement>, 'wrap'> {
  children: ReactNode
  type?:
    | 'primary-header'
    | 'secondary-header'
    | 'section-header'
    | 'small-header'
    | 'sub-header'
    | 'paragraph'
    | 'small'
  color?: 'black' | 'white' | 'grey' | 'blue' | 'red'
  align?: 'left' | 'center' | 'right'
  shadow?: boolean
  id?: string
  wrap?: boolean
  className?: string
}
