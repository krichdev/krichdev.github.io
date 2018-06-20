import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  width: 100%;
  padding: 1.8em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContactForm = styled.form`
  input,
  textarea {
    width: 50vw;
    display: block;
    padding: 12px 20px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  input[type='submit'] {
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
  }
`


const IndexPage = ({ data }) => (
    <ContactWrapper>
        <h2>Get In Touch</h2>
        <ContactForm
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
        >
            <input type="text" name="name" placeholder="Your Name" required />

            <input type="email" name="email" placeholder="Your E-mail" required />

            <textarea placeholder="Type your message" name="message" required />

            <input type="submit" value="Send" />
        </ContactForm>
    </ContactWrapper>
)

export default IndexPage