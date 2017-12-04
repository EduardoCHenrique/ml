import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Icon from './Icon.js'

describe('Icon Component', () => {
  it('Shows no icon when an error occurs', () => {
    const wrapper = shallow(<Icon />)
    expect(wrapper.type()).to.equal(null)
  })
})
