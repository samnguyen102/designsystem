export default interface FlexContainerProps {
  id?: string
  className?: string
  direction?:
    | 'horizontal'
    | 'vertical'
    | 'horizontal-reverse'
    | 'vertical-reverse'
  primaryAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
  secondaryAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
  textAlign?: 'center' | 'right' | 'left'
  fullWidth?: boolean
}
