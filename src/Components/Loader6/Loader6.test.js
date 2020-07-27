import React from 'react'
import renderer from 'react-test-renderer'
import { Loader6 } from '.'
it('renders correctly', () => {
  const tree = renderer.create(<Loader6 />).toJSON()
  expect(tree).toMatchSnapshot()
})
