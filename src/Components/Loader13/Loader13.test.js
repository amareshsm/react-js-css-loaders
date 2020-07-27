import React from 'react'
import renderer from 'react-test-renderer'
import { Whirl } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Whirl />).toJSON()
  expect(tree).toMatchSnapshot()
})
