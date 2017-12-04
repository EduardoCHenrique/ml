import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from './App.js'

describe('Icon Component', () => {
  // validateClassNameMerge(Icon, 'icon', { name: 'channel-messenger' })

  it('Shows no icon when an error occurs', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.App')).to.have.length(1)
  })
})
