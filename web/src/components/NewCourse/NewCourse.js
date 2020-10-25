import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import CourseForm from 'src/components/CourseForm'

import { QUERY } from 'src/components/CoursesCell'

const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourseMutation($input: CreateCourseInput!) {
    createCourse(input: $input) {
      id
    }
  }
`

const NewCourse = () => {
  const { addMessage } = useFlash()
  const [createCourse, { loading, error }] = useMutation(
    CREATE_COURSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.courses())
        addMessage('Course created.', { classes: 'rw-flash-success' })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onSave = (input) => {
    createCourse({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Course</h2>
      </header>
      <div className="rw-segment-main">
        <CourseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCourse
