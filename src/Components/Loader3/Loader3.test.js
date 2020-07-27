import React from 'react'
import renderer from 'react-test-renderer'
import { Chaser } from '../Loader3'
it('renders correctly', () => {
  const tree = renderer.create(<Chaser />).toJSON()
  expect(tree).toMatchSnapshot()
})
