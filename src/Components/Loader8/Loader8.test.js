import React from 'react'
import renderer from 'react-test-renderer'
import { Loader8 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader8 />).toJSON()
  expect(tree).toMatchSnapshot()
})
