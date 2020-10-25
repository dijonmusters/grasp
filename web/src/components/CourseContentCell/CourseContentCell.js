import styled from 'styled-components'

export const QUERY = gql`
  query CourseContentQuery($id: Int!) {
    course(id: $id) {
      id
      name
    }
  }
`

const Container = styled.div`
  padding: 2rem;
`

export const Loading = () => <Container>Loading...</Container>

export const Empty = () => <Container>Empty</Container>

export const Failure = ({ error }) => (
  <Container>Error: {error.message}</Container>
)

export const Success = ({ course }) => {
  return (
    <Container>
      <h2>{course.name}</h2>
    </Container>
  )
}
