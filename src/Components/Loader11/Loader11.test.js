import React from 'react'
import renderer from 'react-test-renderer'
import { Loader11 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader11 />).toJSON()
  expect(tree).toMatchSnapshot()
})
