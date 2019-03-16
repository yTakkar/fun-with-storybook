import React from 'react'
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'

import Button from '../components/Button';

const stories = storiesOf('Button', module)

stories.addWithJSX('With Blue background', () => 
  <Button text={text('text', 'Blue Background')} bg={color('bg', 'blue')} />
)

stories.addWithJSX('Without background', () => 
  <Button text={text('text', 'Without background')} />
)

stories.addWithJSX('With onClick', () => (
  <Button text={text('text', 'Hello everyone!')} onClick={linkTo('Button', 'With Blue background')} />
))
