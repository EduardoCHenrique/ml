import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { lorem } from 'faker'
import { spy, assert } from 'sinon'

import Home from './Home.js'

describe('Home Component', () => {
  const wrapper = shallow(<Home />)

  it('should render', () => {
    expect(wrapper.find('.home')).to.have.length(1)
  })

})