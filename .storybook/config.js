import { configure, setAddon, addDecorator, addParameters } from '@storybook/react'
import jsxAddon from 'storybook-addon-jsx'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withConsole } from '@storybook/addon-console';

setAddon(jsxAddon)
addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const req = require.context('../src/stories', true, /.story.js$/)

addParameters({
  viewport: { defaultViewport: 'iphone6' }
})

const loadStories = () => {
  require('../src/stories/Welcome.story')
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
