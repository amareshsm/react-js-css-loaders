import React from 'react'
import renderer from 'react-test-renderer'
import { Loader5 } from '../Loader5'
it('renders correctly', () => {
  const tree = renderer.create(<Loader5 />).toJSON()
  expect(tree).toMatchSnapshot()
})
