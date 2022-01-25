import React, { FC } from 'react'
import DropdownProps from './Dropdown.interface'

/**
 * component: Dropdown
 *
 * Summary:
 * Used to render a drop down input for selecting input options.
 *
 * Description:
 * Will render a standard HTML <input/> tag, but with default accessibility
 * standards handled, labels provided, and validation/error UI included.
 *
 * @param id: string
 * Used to apply a custom ID property to the HTML input element
 *
 * @param classList: string[]
 * Used to apply a list of custom classes to the HTML input element
 *
 * @param label: string
 * Description of what the user is asked to input, will hover above inputted text
 *
 * @param value: string
 * User's entered data
 *
 * @param onChange: function
 * Callback function to handle new data entered into input field
 *
 * @param error: boolean
 * Should be 'true' if the user has entered an invalid response,
 * and will render a red border around the input field
 *
 * @param validated: boolean
 * Should be 'true' if the user has entered a complete and validated response,
 * and will render a green border around the input field
 *
 * @return HTML <div/> element, containing an <input/> and <label/>
 */

export const Dropdown: FC<DropdownProps> = ({
  id,
  classList,
  options,
  style,
  onChange,
  value,
}) => {
  let className = `se-dropdown`
  if (classList) {
    className = `${className} ${classList.join(' ')}`
  }

  return (
    <div id={id} className={className} style={style}>
      <select value={value} onChange={onChange}>
        <option value=""></option>
        {options.map(option => {
          return <option value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}
