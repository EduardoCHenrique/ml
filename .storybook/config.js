import { configure } from '@storybook/react';

import './storybook.scss'

const requires = require.context('../src', true, /storybook\.js$/)
const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module)