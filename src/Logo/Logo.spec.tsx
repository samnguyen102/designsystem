import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from './Logo'

describe('Logo', () => {
  const wrapper = shallow(<Logo />)
  it('Should render without crashing.', () => {
    const c = wrapper.find('#Logo')
    expect(c.length).toBe(1)
  })
})
