import { render, screen } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './CoursesListCell'
import { standard } from './CoursesListCell.mock'

describe('CoursesListCell', () => {
  test('Loading renders successfully', () => {
    render(<Loading />)
    // Use screen.debug() to see output
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Empty renders successfully', async () => {
    render(<Empty />)
    expect(screen.getByText('Empty')).toBeInTheDocument()
  })

  test('Failure renders successfully', async () => {
    render(<Failure error={new Error('Oh no')} />)
    expect(screen.getByText(/Oh no/i)).toBeInTheDocument()
  })

  test('Success renders successfully', async () => {
    render(<Success coursesList={standard().coursesList} />)
    expect(screen.getByText(/42/i)).toBeInTheDocument()
  })
})
