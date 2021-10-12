import React, { FC } from 'react'
import CardProps from './Card.interface'

export const Card: FC<CardProps> = ({
  id,
  type = 'primary',
  classList,
  children,
  onClick,
}) => {
  let className = `se-card ${type}`
  if (classList) {
    className = `${className} ${classList.join(' ')}`
  }

  return (
    <div id={id} className={className} onClick={onClick}>
      {children}
    </div>
  )
}
