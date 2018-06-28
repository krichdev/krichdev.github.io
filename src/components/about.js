import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { GitHub } from 'styled-icons/fa-brands/Github'

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
`
const AboutCopy = styled.div`
  max-width: 450px;
  margin-top: 20px;
  p {
    padding: 0 15px;
  }
`
const Github = Github.extend`
  color: #164675;
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
        <p>Find Me Online</p>
      </AboutCopy>
    </AboutContainer>
  </AboutWrapper>
)

export default About
