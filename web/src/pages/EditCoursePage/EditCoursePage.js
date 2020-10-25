import CoursesLayout from 'src/layouts/CoursesLayout'
import EditCourseCell from 'src/components/EditCourseCell'

const EditCoursePage = ({ id }) => {
  return (
    <CoursesLayout>
      <EditCourseCell id={id} />
    </CoursesLayout>
  )
}

export default EditCoursePage
