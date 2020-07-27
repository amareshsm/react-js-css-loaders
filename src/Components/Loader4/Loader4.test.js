import React from 'react'
import renderer from 'react-test-renderer'
import { Loader4 } from '../Loader4'
it('renders correctly', () => {
  const tree = renderer.create(<Loader4 />).toJSON()
  expect(tree).toMatchSnapshot()
})
