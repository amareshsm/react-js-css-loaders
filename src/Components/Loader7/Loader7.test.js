import React from 'react'
import renderer from 'react-test-renderer'
import { Loader7 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader7 />).toJSON()
  expect(tree).toMatchSnapshot()
})
