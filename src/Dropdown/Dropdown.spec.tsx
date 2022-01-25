import React, { ChangeEvent } from 'react'
import { shallow } from 'enzyme'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  const wrapper = shallow(
    <Dropdown
      option={''}
      value={''}
      onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
  it('Should render without crashing.', () => {
    const c = wrapper.find('#Dropdown')
    expect(c.length).toBe(1)
  })
})
