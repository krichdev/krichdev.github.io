import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import logo from '../images/kyle-richardson-web-dev-seattle.png'

const HeaderWrapper = styled.div`
  background: #164675;
  overflow: hidden;
  position: relative;
  height: 40vh;
  h1 {
    img {
      height: 100px;
      width: 100px;
    }
  }
  h2,
  h3 {
    color: ghostwhite;
    margin-bottom: 5px;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 110%;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = ({ siteTitle, background }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Kyle Richardson - Web Developer" />
        </Link>
      </h1>
      <h2>HELLO, I'M KYLE.</h2>
      <h3>// AN ALWAYS LEARNING DEVELOPER</h3>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
      }}
      sizes={background}
    />
  </HeaderWrapper>
)

export default Header
