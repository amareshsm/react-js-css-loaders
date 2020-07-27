import React from 'react'
import renderer from 'react-test-renderer'
import { Revolver } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Revolver />).toJSON()
  expect(tree).toMatchSnapshot()
})
