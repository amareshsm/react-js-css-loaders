import React from 'react'
import renderer from 'react-test-renderer'
import { Cardfliping } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Cardfliping />).toJSON()
  expect(tree).toMatchSnapshot()
})
