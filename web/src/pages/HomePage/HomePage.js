import MainLayout from 'src/layouts/MainLayout'
import styled from 'styled-components'
import CoursesListCell from 'src/components/CoursesListCell'

const Container = styled.div`
  padding: 2rem 4rem;
`

const Title = styled.h2`
  font-weight: 600;
`

const HomePage = () => {
  return (
    <MainLayout>
      <Container>
        <Title>Courses</Title>
        <CoursesListCell />
      </Container>
    </MainLayout>
  )
}

export default HomePage
