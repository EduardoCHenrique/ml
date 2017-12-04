import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Search from '../base/Search';

storiesOf('Search', module).add('Search props', () => {
  return <Search />
})
