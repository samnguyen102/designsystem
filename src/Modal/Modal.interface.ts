import { ReactNode } from 'react'

export default interface ModalProps {
  classList?: string[]
  id?: string
  children: ReactNode
  close?: () => void
}
