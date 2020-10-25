import Course from 'src/components/Course'

export const QUERY = gql`
  query FIND_COURSE_BY_ID($id: Int!) {
    course: course(id: $id) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Course not found</div>

export const Success = ({ course }) => {
  return <Course course={course} />
}
