import React from 'react'
import renderer from 'react-test-renderer'
import { Throbber } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Throbber />).toJSON()
  expect(tree).toMatchSnapshot()
})
