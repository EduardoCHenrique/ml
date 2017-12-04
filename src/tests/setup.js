/* eslint no-underscore-dangle: 0 */
/* eslint prefer-rest-params: 0 */
import jsdom from 'jsdom'
import sinon from 'sinon'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// ============================================================================
// Mocking DOM
// ============================================================================

const doc = jsdom.jsdom(`
    <!doctype html>
    <html>
        <body></body>
    </html>
`)

const win = doc.defaultView
doc.hasFocus = () => ({})

Object.values = (object) => Object.keys(object).map(key => object[key])

Object.assign(global, {
  document: doc,
  window: win,
  navigator: win.navigator,
})


Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

const React = require('react')
const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')

chai.use(chaiEnzyme())

const error = global.console.error

