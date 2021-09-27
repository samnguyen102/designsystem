import React, { FC } from 'react'
import LogoProps from './Logo.interface'
import LogoWhite from './white.png'
import LogoGreen from './green.png'

export const Logo: FC<LogoProps> = ({
  id,
  classList,
  color = 'white',
  shadow,
  size,
}) => {
  let className = `se-logo${shadow ? ' with-shadow' : ''}`
  if (classList) {
    className = `${className} ${classList.join(' ')}`
  }

  return (
    <img
      id={id}
      className={className}
      style={size ? { height: size, width: size } : null}
      src={color === 'white' ? LogoWhite : LogoGreen}
    />
  )
}
