import React from 'react'
import renderer from 'react-test-renderer'
import { Loader10 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader10 />).toJSON()
  expect(tree).toMatchSnapshot()
})
