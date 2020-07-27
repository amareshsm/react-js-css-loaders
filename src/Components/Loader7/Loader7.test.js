import React from 'react'
import renderer from 'react-test-renderer'
import { Revolution } from './'
it('renders correctly', () => {
  const tree = renderer.create(<Revolution />).toJSON()
  expect(tree).toMatchSnapshot()
})
