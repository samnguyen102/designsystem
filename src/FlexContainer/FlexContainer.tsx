import React, { FC } from 'react'
import FlexContainerProps from './FlexContainer.interface'
/**
 * component: FlexContainer
 *
 * Summary:
 * Renders a <div> element with flex alignment set by default.
 *
 * @param direction: 'horsental' | 'vertical
 * Controls the `flex-direction` property and maps to 'row' and 'column'
 *
 * @param primaryAlign: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
 * Controls the `justify-content` property, and aligns the content of the container
 * on the 'primary' axis, the one that is parallel to the flex direction.
 *
 * @param secondaryAlign: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
 * Controls the `align-items` property, and aligns the content of the container
 *
 * @param textAlign: 'left' | 'center' | 'right'
 * Controls the `text-align` property, and aligns the text of the container.
 *
 * @param id: string
 * Used to apply a custom ID property to the HTML button element
 *
 * @param className: string
 * Used to apply custom classes to the HTML button element
 *
 * @return HTML <div/> element containing provided elements, flex aligned.
 */
export const FlexContainer: FC<FlexContainerProps> = ({
  children,
  id,
  className,
  direction = 'horizontal',
  primaryAlign = 'center',
  secondaryAlign = 'center',
  textAlign = 'center',
  fullWidth = 'false',
}) => {
  // add default classes to optional custom className
  className = `${
    className ? className + ' ' : ''
  }se-flex-container ${direction} primary-${primaryAlign} secondary-${secondaryAlign} text-${textAlign}${
    fullWidth ? ' full-width' : ''
  }`

  // pass className and id to all possible return elements
  const defaultProps = { id, className }

  return <div {...defaultProps}>{children}</div>
}
