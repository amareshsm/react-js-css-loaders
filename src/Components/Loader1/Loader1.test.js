import React from 'react'
import renderer from 'react-test-renderer'
import { Loader1 } from '../Loader1'
it('renders correctly', () => {
  const tree = renderer.create(<Loader1 />).toJSON()
  expect(tree).toMatchSnapshot()
})
