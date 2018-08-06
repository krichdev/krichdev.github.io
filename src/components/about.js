import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Github from '../icons/Github'
import Linkedin from '../icons/LinkedIn'
import Instagram from '../icons/Instagram'

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.8em 0;
  text-align: center;
  h2,
  h3 {
    color: #164675;
  }
`
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  svg {
    height: 30px;
    fill: #164675;
  }
`
const AboutCopy = styled.div`
  max-width: 450px;
  margin-top: 20px;
  p {
    padding: 0 15px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`


const About = ({ personal }) => (
  <AboutWrapper>
    <h2>About Me</h2>
    <AboutContainer>
      <Img
        style={{
          width: '30vw',
          minWidth: '200px',
          height: 'auto',
          borderRadius: '100%',
        }}
        sizes={personal}
      />
      <AboutCopy>
        <p>
          I am a front end developer who grew up working in my family’s business.
          I enjoy listening to 90's slow jams, camping, and coaching baseball.
          I’m eager to leverage my experience gained working in a small business
          to problem solve, contribute to a team, and continue to improve my development skills.
        </p>
        <p style={{ marginBottom: "10px", textDecoration: "underline" }}>Find Me Online</p>
        <IconWrapper>
          <a href="https://www.github.com/krichdev" target="__blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/kyle-richardson" target="__blank">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/kylecodes" target="__blank">
            <Instagram />
          </a>
        </IconWrapper>
      </AboutCopy>
    </AboutContainer>
  </AboutWrapper >
)

export default About
