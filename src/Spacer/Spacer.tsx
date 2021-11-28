import React, { FC } from 'react'
import SpacerProps from './Spacer.interface'

/**
 * component: Spacer
 *
 * Summary:
 * Used to create empty space between elements in a container
 *
 * Description:
 * Allows other UI components to be more reusable an extensible
 * by replacing the need to add margin to the top, bottom, left, or right
 * of an existing element, requiring style override of the UI kit default
 *
 * @param height: number | string
 * Used to define the height of the empty, invisible div
 * Note: should be used in increments of 8px whenever possible
 *
 * @param width: number | string
 * Used to define the width of the empty, invisible div
 * Note: should be used in increments of 8px whenever possible
 *
 * @param id: string
 * Used to apply a custom ID property to the HTML button element
 *
 * @param className: string
 * Used to apply custom classes to the HTML button element
 *
 * @return empty, invisible HTML <div/> element to create empty space
 */
export const Spacer: FC<SpacerProps> = ({
  height = 8,
  width = 8,
  heightMobile,
  widthMobile,
  id,
  className,
}) => {
  const isMobile = window.innerWidth < 600

  return (
    <div
      id={id}
      className={`se-spacer${className ? ' ' + className : ''}`}
      style={{
        height: isMobile && heightMobile ? heightMobile : height,
        width: isMobile && widthMobile ? widthMobile : width,
      }}
    />
  )
}
