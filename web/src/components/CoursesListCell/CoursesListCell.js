import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CoursesListQuery {
    courses {
      id
      name
      createdAt
    }
  }
`

const Container = styled.div`
  padding: 1rem;
`

const Course = styled(Link)`
  display: block;
  border-bottom: 1px solid #efefef;
  padding: 1rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Loading = () => <Container>Loading...</Container>

export const Empty = () => <Container>Empty</Container>

export const Failure = ({ error }) => (
  <Container>Error: {error.message}</Container>
)

export const Success = ({ courses }) => {
  return (
    <Container>
      {courses.map(({ id, name }) => (
        <Course key={id} to={routes.courseContent({ id })}>
          {name}
        </Course>
      ))}
    </Container>
  )
}
