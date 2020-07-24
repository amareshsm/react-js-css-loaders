import React from 'react'
import renderer from 'react-test-renderer'
import { Loader2 } from '../Loader2'
it('renders correctly', () => {
  const tree = renderer.create(<Loader2 />).toJSON()
  expect(tree).toMatchSnapshot()
})
