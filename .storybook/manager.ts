import {addons} from '@storybook/manager-api'
import {create} from '@storybook/theming'

addons.setConfig({
  theme:create({
    base: 'dark',
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://placehold.it/350x150',
  })
})