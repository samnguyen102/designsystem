import { ReactNode } from 'react'

export default interface ModalProps {
  id?: string
  className?: string
  children: ReactNode
  close: () => void
}
