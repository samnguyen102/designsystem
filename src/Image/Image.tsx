import React, { FC } from 'react'
import DEFAULT_FALLBACK_IMAGE from '../fallback.jpeg'
import ImageProps from './Image.interface'

/**
 * component: Image
 *
 * Summary:
 * Used to render image files with proper accessibility and fallbacks
 *
 * Description:
 * Will render a standard HTML <img/> tag, but with a default fallback
 * to prevent missing images from rendering to the application UI.
 *
 * @param id: string
 * Used to apply a custom ID property to the HTML img element
 *
 * @param className: string
 * Used to apply a custom class to the HTML img element
 *
 * @param alt: string
 * Used to provide a description of the rendered image
 *
 * @return HTML <img> element
 */
export const Image: FC<ImageProps> = ({ src, className, id, alt }) => {
  const handleFallback = (e: { target: any }) => {
    if (e.target.src !== DEFAULT_FALLBACK_IMAGE) {
      e.target.src = DEFAULT_FALLBACK_IMAGE
    }
  }

  className = `izo-image ${className}`

  return (
    <img
      src={src}
      className={className}
      id={id}
      onError={e => handleFallback(e)}
      alt={alt}
    />
  )
}
