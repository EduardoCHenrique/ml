import React from 'react'
import faker from 'faker'

import { storiesOf } from '@storybook/react'
import ListItem from '../base/ListItem'

const props = {
  price: faker.commerce.price(),
  picture: faker.image.image(),
  title: faker.commerce.productName(),
  id: faker.random.uuid()
}

storiesOf('ListItem', module).add('ListItem props', () => {
  return <ListItem  {...props} />
})
