import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../base/Button'

storiesOf('Button', module).add('Button props', () => {
  return ( <Button>Go To Card</Button> )
})
