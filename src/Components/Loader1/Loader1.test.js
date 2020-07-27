import React from 'react'
import renderer from 'react-test-renderer'
import { Moon } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Moon />).toJSON()
  expect(tree).toMatchSnapshot()
})
