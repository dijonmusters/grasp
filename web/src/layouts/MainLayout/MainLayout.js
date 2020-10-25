import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;800&display=swap');

  body {
    font-family: 'Manrope', sans-serif;
    margin: 0;
    font-size: 16px;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
    padding: 0;
    margin: 0;
  }
`

const Header = styled.header`
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #dfdfdf;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 3rem;
`

const Subtitle = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 200;
  color: #666;
  bottom: 48px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    h1 {
      text-decoration: underline;
    }
  }
`

const MainLayout = ({ children }) => {
  const { logIn, isAuthenticated, logOut } = useAuth()

  return (
    <>
      <GlobalStyle />
      <StyledLink to={routes.home()}>
        <Header>
          <Title>Grasp</Title>
          <Subtitle>a learning experience.</Subtitle>
        </Header>
      </StyledLink>
      {isAuthenticated ? (
        <a href="#" onClick={logOut}>
          Logout
        </a>
      ) : (
        <a href="#" onClick={logIn}>
          Login
        </a>
      )}
      <main>{children}</main>
    </>
  )
}

export default MainLayout
