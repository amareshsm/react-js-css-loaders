import React from 'react'
import renderer from 'react-test-renderer'
import { Elipsis } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Elipsis />).toJSON()
  expect(tree).toMatchSnapshot()
})
