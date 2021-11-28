import React, { FC } from 'react'
import TextProps from './Text.interface'

/**
 * component: Text
 *
 * Summary:
 * Used for any text rendered in the application to maintain consistency of styling
 * and reduce the need to write and rewrite custom CSS
 *
 * @param type: solid, outline, text
 * Defines the appearance of the text
 * `primary-header` is the largest, most prominent text such as page titles
 * `secondary-header` is used for any prominent text and headers below a page title
 * `section-header` is used for any text labeling a card or small content section
 * `small-header` is used for sections, or item headers
 * `sub-header` is used as a description under a larger header
 * `paragraph` is used for all basic text and body elements
 * `small` is used for understated basic text
 *
 * @param color: black, white, green
 * Changes the color of the text itself.
 *
 * @param shadow: boolean
 * Will apply the proper text shadow if true.
 *
 * @param id: string
 * Used to apply a custom ID property to the HTML button element
 *
 * @param className: string
 * Used to apply custom classes to the HTML button element
 *
 * @param align: left, center, right
 * Used to define the element's text alignment
 *
 * @param wrap: boolean
 * Used to define whether the text should wrap onto multiple lines,
 * or cut off with an ellipsis
 *
 * @return HTML <div/> element containing provided text
 */
export const Text: FC<TextProps> = ({
  children,
  id,
  className = '',
  type = 'paragraph',
  color = 'black',
  align = 'left',
  shadow = false,
  wrap = true,
}) => {
  // add default classes to optional custom className
  className = `izo-text ${type} ${align} ${color}${wrap ? '' : ' no-wrap'}${
    shadow ? ' shadow' : ''
  } ${className}`

  // pass className and id to all possible return elements
  const elementProps = { className, id }

  switch (type) {
    case 'primary-header':
      return <h1 {...elementProps}>{children}</h1>
    case 'secondary-header':
      return <h2 {...elementProps}>{children}</h2>
    case 'section-header':
      return <h3 {...elementProps}>{children}</h3>
    case 'small-header':
      return <h4 {...elementProps}>{children}</h4>
    case 'sub-header':
      return <h5 {...elementProps}>{children}</h5>
    case 'paragraph':
      return <p {...elementProps}>{children}</p>
    case 'small':
      return <div {...elementProps}>{children}</div>
    default:
      return null
  }
}
