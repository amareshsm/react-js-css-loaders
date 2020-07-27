import React from 'react'
import renderer from 'react-test-renderer'
import { Loader13 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader13 />).toJSON()
  expect(tree).toMatchSnapshot()
})
