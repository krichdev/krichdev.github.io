import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Test from '../components/test'

const IndexPage = ({ data }) => (
  <div>
    <Test />
    <Test />
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    background: imageSharp(id: { regex: "/seattle-web-developer.jpg/" }) {
      sizes(maxWidth: 1240, grayscale: true, maxHeight: 500) {
        ...GatsbyImageSharpSizes
      }
    }
    logo: imageSharp(id: { regex: "/kyle-richardson-web-dev-seattle.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
