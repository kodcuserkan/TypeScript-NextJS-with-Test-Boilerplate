import React from 'react'
import { render } from '../testUtils'
import About from '../../pages/about'

describe('About page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<About />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('Checks whether h1 tag exists', () => {
    const { getByTestId } = render(<About />, {})
    expect(getByTestId('about-title')).toBeTruthy()
  })
})
