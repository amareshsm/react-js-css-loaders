import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Moon,
  Revolver,
  Chaser,
  Rhythm,
  Elipsis,
  Throbber,
  Revolution,
  Square,
  Cardfliping,
  Dewdrops,
  Spinner,
  Easeinout,
  Whirl,
} from '../src'
storiesOf('Loaders', module)
  .add('Moon ', () => <Moon />)
  .add('Revolver', () => <Revolver />)
  .add('Chaser', () => <Chaser />)
  .add('Rhythm', () => <Rhythm />)
  .add('Elipsis', () => <Elipsis />)
  .add('Throbber', () => <Throbber />)
  .add('Revolution', () => <Revolution />)
  .add('Square', () => <Square />)
  .add('Cardfliping', () => <Cardfliping />)
  .add('Dewdrops ', () => <Dewdrops />)
  .add('Spinner ', () => <Spinner />)
  .add('Ease in out ', () => <Easeinout />)
  .add('Whirl ', () => <Whirl />)
