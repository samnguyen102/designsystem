import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from './Modal'

describe('Modal', () => {
  const wrapper = shallow(<Modal close={() => {}}>hello world</Modal>)
  it('Should render without crashing.', () => {
    const c = wrapper.find('#Modal')
    expect(c.length).toBe(1)
  })
})
