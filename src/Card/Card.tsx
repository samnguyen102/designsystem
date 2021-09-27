import React, { FC } from 'react'
import CardProps from './Card.interface'

export const Card: FC<CardProps> = ({ id, classList, children }) => {
  let className = `se-card`
  if (classList) {
    className = `${className} ${classList.join(' ')}`
  }

  return (
    <div id={id} className={className}>
      {children}
    </div>
  )
}