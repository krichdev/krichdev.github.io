import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.8em 0;
    display: flex;
    justify-content: center;
    h2, h3 {
        color: #164675;
    }
`
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
`
const AboutCopy = styled.div`
    max-width: 450px;
    margin-top: 20px;
    text-align: center;
`

const About = ({personal}) => (
  <AboutWrapper>
    <AboutContainer>
        <h2>About Me</h2>
        <Img 
            style={{
                width: '30vw',
                minWidth: '200px',
                height: 'auto',
                borderRadius: '100%'
            }}
            sizes={personal}
        />
        <AboutCopy>
            <p>Cray normcore gluten-free, paleo unicorn 
                cloud bread letterpress everyday carry. 
                Lyft craft beer hashtag snackwave VHS, 
                subway tile tofu authentic freegan flexitarian 
                hot chicken four loko ramps shaman kale.
            </p>
            <p>Cray normcore gluten-free, paleo unicorn 
                cloud bread letterpress everyday carry. 
                Lyft craft beer hashtag snackwave VHS, 
                subway tile tofu authentic freegan flexitarian 
                hot chicken four loko ramps shaman kale.
            </p>
        </AboutCopy>
    </AboutContainer>
  </AboutWrapper>
)

export default About