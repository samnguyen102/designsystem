import React, { FC } from 'react'
import ModalProps from './Modal.interface'

export const Modal: FC<ModalProps> = ({ id, classList, children, close }) => {
  let className = `se-modal`
  if (classList) {
    className = `${className} ${classList.join(' ')}`
  }

  const handleClose = e => {
    // ensure that inner modal clicks don't bubble out to the background click event handler
    if (close && e.target.id === 'se-modal-background') {
      close()
    }
  }

  return (
    <div id="se-modal-background" onClick={handleClose}>
      <aside id={id} className={className}>
        {children}
      </aside>
    </div>
  )
}
