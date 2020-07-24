import React from 'react'
import renderer from 'react-test-renderer'
import { Loader3 } from '../Loader3'
it('renders correctly', () => {
  const tree = renderer.create(<Loader3 />).toJSON()
  expect(tree).toMatchSnapshot()
})
