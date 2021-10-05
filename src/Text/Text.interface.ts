import { HTMLProps, ReactNode } from 'react'

export default interface Text extends Omit<HTMLProps<HTMLDivElement>, 'wrap'> {
  children: ReactNode
  type?:
    | 'primary-header'
    | 'secondary-header'
    | 'section-header'
    | 'small-header'
    | 'subheader'
    | 'paragraph'
    | 'small'
  color?: 'black' | 'white' | 'green' | 'grey' | 'blue' | 'red'
  shadow?: boolean
  id?: string
  align?: 'left' | 'center' | 'right'
  wrap?: boolean
  classList?: string[]
  bold?: boolean
}
