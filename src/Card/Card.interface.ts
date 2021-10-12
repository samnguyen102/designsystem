export default interface CardProps {
  classList?: string[]
  id?: string
  type?: 'primary' | 'secondary'
  onClick?: () => any
}
