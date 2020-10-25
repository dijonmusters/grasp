import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import CourseForm from 'src/components/CourseForm'

export const QUERY = gql`
  query FIND_COURSE_BY_ID($id: Int!) {
    course: course(id: $id) {
      id
      name
      createdAt
    }
  }
`
const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourseMutation($id: Int!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ course }) => {
  const { addMessage } = useFlash()
  const [updateCourse, { loading, error }] = useMutation(
    UPDATE_COURSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.courses())
        addMessage('Course updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateCourse({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Course {course.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CourseForm
          course={course}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
