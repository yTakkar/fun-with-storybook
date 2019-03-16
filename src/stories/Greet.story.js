import React from 'react'
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react'

import Greet from '../components/Greet'

const stories = storiesOf('Greet', module)

stories.addWithJSX('to', () => 
  <Greet to={text('to', 'Faiyaz')} />
)
