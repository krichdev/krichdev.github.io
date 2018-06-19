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
const ContactForm = styled.form`
    input, textarea {
      width: 80vw;
      display: block;
      padding: 12px 20px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    
    input[type=submit] {
      width: 80vw;
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
    }
`

const Contact = () => (
  <ContactWrapper>
    <h2>Get In Touch</h2>
    <ContactForm>
      <input type="text" placeholder="Your Name" required />

      <input type="email" placeholder="Your E-mail" required />

      <textarea placeholder="Type your message" required />

      <input type="submit" value="Contact Me" />

    </ContactForm>
  </ContactWrapper >
)

export default Contact