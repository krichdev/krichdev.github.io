import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  width: 100%;
  padding: 1.8em 0;
  background-color: #164675;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ghostwhite;
`

const ContactButton = styled.button`
    width: 50vw;
    background-color: #c1111d;
    color: ghostwhite;
    cursor: pointer;
    padding: 14px 20px;
    margin: 20px 0;
    border-radius: 3px;
    border: none;
    &:hover {
      background-color: #ad0f1a;
    }
`


const Contact = () => (
  <ContactWrapper>
    <h2>Get In Touch</h2>
    <Link to="/contact">
      <ContactButton>E-mail Me</ContactButton>
    </Link>
  </ContactWrapper>
)

export default Contact
