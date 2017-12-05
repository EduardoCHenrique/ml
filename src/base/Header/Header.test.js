import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Search from 'src/base/Search'
import { Link } from 'react-router-dom'

import Header from './Header.js'

describe('Header Component', () => {
  const wrapper = shallow(<Header />)

  it('should render', () => {
    expect(wrapper.find('.header')).to.have.length(1)
  })

  it('should render the Search Component', () => {
    expect(wrapper.find(Search)).to.have.length(1)
  })

  it('should render ML Logo', () => {
    expect(wrapper.find('.header__logo')).to.have.length(1)
  })

  it('should render a Link', () => {
    expect(wrapper.find(Link)).to.have.length(1)
  })

  it('should render a Link with to / props', () => {
    expect(wrapper.find(Link).props().to).to.equal('/')
  })

  it('should render a Link wrapping the <h1> ML </h1> logo', () => {
    expect(wrapper.find(Link).props().children.type).to.equal('h1')
    expect(wrapper.find(Link).props().children.props.className).to.equal('header__logo')
  })

  it('should render a Link wrapping the logo image', () => {
    expect(wrapper.find(Link).find('.header__logo__image')).to.have.length(1)
  })

})