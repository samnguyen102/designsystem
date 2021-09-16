import React from 'react'
import { shallow } from 'enzyme'
import { Card } from './Card'

describe('Card', () => {
  const wrapper = shallow(<Card />)
  it('Should render without crashing.', () => {
    const c = wrapper.find('#Card')
    expect(c.length).toBe(1)
  })
})
