import React from 'react'
import renderer from 'react-test-renderer'
import { Easeinout } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Easeinout />).toJSON()
  expect(tree).toMatchSnapshot()
})
