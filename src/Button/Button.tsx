import React, { FC } from 'react'
import ButtonProps from './Button.interface'

/**
 * component: Button
 *
 * Summary:
 * Used for all clickable elements, regardless of appearance
 *
 * Description:
 * Button elements should be used for anything that the user clicks
 * in order to support accessibility. By default, the button component
 * will support screen readers and keyboard based interactions,
 * and therefore should always be used instead of simply adding
 * an onClick method to a basic HTML element.
 *
 * @param type: solid, outline, text
 * Defines the appearance of the button
 * `solid` should be used for primary actions
 * `outline` can be used for secondary interactions
 * `text` can be used for non-focused clickable elements, as well as links
 *
 * @param size: small, medium, large
 * welp this one seems pretty straightforward....
 *
 * @param color: white, black, blue, red
 * defines the background color of the button
 *
 * @param id: string
 * Used to apply a custom ID property to the HTML button element
 *
 * @param className: string
 * Used to apply a list of custom classes to the HTML button element
 *
 * @param onClick: function
 * Callback to be applied to click and key press event listeners
 *
 * @return HTML <button> element
 */
export const Button: FC<ButtonProps> = ({
  children,
  type = 'primary',
  size = 'medium',
  color = 'white',
  id,
  className,
  fullWidth,
  onClick,
  disabled,
}) => {
  // add default classes to optional custom className
  className = `izo-button type-${type} size-${size} color-${color}${
    fullWidth ? ' full-width' : ''
  } ${className}`

  const handler = disabled ? undefined : onClick

  return (
    <button
      type="button"
      id={id}
      className={className}
      onClick={handler}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
