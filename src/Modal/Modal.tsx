import React, { FC, MouseEventHandler } from 'react'
import ModalProps from './Modal.interface'

export const Modal: FC<ModalProps> = ({ id, className, children, close }) => {
  className = `izo-modal ${className}`

  const handleClose: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    // ensure that inner modal clicks don't bubble out to the background click event handler
    if ((target as HTMLDivElement).id === 'izo-modal-background') {
      close()
    }
  }

  return (
    <div id="izo-modal-background" onClick={handleClose}>
      <aside id={id} className={className}>
        {children}
      </aside>
    </div>
  )
}
