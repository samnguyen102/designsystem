import React from 'react'
import { shallow } from 'enzyme'
import { FlexContainer } from './FlexContainer'

describe('FlexContainer', () => {
  const wrapper = shallow(<FlexContainer />)
  it('Should render without crashing.', () => {
    const c = wrapper.find('#FlexContainer')
    expect(c.length).toBe(1)
  })
})
