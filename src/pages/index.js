import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import About from '../components/about'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Contact from '../components/contact'
import projectData from '../projectData'

const IndexPage = ({ data }) => (
  <div>
    <About personal={data.personal.sizes}/>
    <Projects projects={projectData}/>
    <Blog />
    <Contact />
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
    personal: imageSharp(id: {regex: "/kyle-with-lucas.jpg/"}){
      sizes(grayscale: true){
        ...GatsbyImageSharpSizes
      }
    } 
  }
`
