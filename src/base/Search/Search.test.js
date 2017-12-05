import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { random } from 'faker'
import { spy, assert } from 'sinon'

import Search from './Search'

const defaultHandleChange = () => {}
const defaultSearch = () => {}
const defaultHandleSearch = () => {}
const defaultOnKeyDown = () => {}

describe('Search Component', () => {
  const props = {
    handleChange: defaultHandleChange, 
    search: defaultSearch,
    handleSearch: defaultHandleSearch
  }

  const wrapper = shallow(<Search {...props} />)

  it('should render', () => {
    expect(wrapper.find('.search')).to.have.length(1)
  })

  it('should render an input', () => {
    expect(wrapper.find('.search__input')).to.have.length(1)
  })

  it('should render and input passing handleChange, value and onKeyDown props ', () => {
    expect(wrapper.find('.search__input').props().onChange).to.equal(defaultHandleChange)
    expect(wrapper.find('.search__input').props().value).to.equal(defaultSearch)
  })
})