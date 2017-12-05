import React from 'react'
import { storiesOf } from '@storybook/react'

import EmptyState from 'src/base/EmptyState'

storiesOf('EmptyState', module).add('EmptyState props', () => {
  return ( <EmptyState /> )
})
