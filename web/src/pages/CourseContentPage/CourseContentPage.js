import CourseContentCell from 'src/components/CourseContentCell'
import MainLayout from 'src/layouts/MainLayout'

const CourseContentPage = ({ id }) => {
  return (
    <MainLayout>
      <CourseContentCell id={id} />
    </MainLayout>
  )
}

export default CourseContentPage
