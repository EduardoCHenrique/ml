import React from 'react'
import { storiesOf } from '@storybook/react'

import Loader from '../base/Loader'

storiesOf('Loader', module).add('Loader props', () => {
  return ( <Loader />)
})
