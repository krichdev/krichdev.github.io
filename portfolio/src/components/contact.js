import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactWrapper = styled.div`
    width: 100%;
    padding: 1.8em 0;
    background-color: #164675;
    height: 400px;
    display: flex;
    justify-content: center;
    h2 {
        color: ghostwhite;
    }
`

const Contact = () => (
  <ContactWrapper>
    <h2>Hello from contact</h2>
  </ContactWrapper>
)

export default Contact