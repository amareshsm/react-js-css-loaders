import React from 'react'
import renderer from 'react-test-renderer'
import { Rhythm } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Rhythm />).toJSON()
  expect(tree).toMatchSnapshot()
})
