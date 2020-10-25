import CoursesLayout from 'src/layouts/CoursesLayout'
import CourseCell from 'src/components/CourseCell'

const CoursePage = ({ id }) => {
  return (
    <CoursesLayout>
      <CourseCell id={id} />
    </CoursesLayout>
  )
}

export default CoursePage
