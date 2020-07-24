import React from 'react'
import { storiesOf } from '@storybook/react'
import { Loader1, Loader2, Loader3 } from '../src'
console.log(Loader1)
storiesOf('Loaders', module)
  .add('Loader 1 ', () => <Loader1 />)
  .add('Loader 2', () => <Loader2 />)
  .add('Loader 3', () => <Loader3 />)
