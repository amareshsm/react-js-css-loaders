import React from 'react'
import renderer from 'react-test-renderer'
import { Square } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Square />).toJSON()
  expect(tree).toMatchSnapshot()
})
