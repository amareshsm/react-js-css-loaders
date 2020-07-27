import React from 'react'
import renderer from 'react-test-renderer'
import { Loader12 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader12 />).toJSON()
  expect(tree).toMatchSnapshot()
})
