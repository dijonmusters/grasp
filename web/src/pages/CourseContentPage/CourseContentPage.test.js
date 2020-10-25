import { render } from '@redwoodjs/testing'

import CourseContentPage from './CourseContentPage'

describe('CourseContentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourseContentPage />)
    }).not.toThrow()
  })
})
