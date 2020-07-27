import React from 'react'
import renderer from 'react-test-renderer'
import { Dewdrops } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Dewdrops />).toJSON()
  expect(tree).toMatchSnapshot()
})
