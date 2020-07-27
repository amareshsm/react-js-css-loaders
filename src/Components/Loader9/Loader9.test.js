import React from 'react'
import renderer from 'react-test-renderer'
import { Loader9 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader9 />).toJSON()
  expect(tree).toMatchSnapshot()
})
