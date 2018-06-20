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
    <About personal={data.personal.sizes} />
    <Projects projects={data.allMarkdownRemark.edges} />
    <Blog />
    <Contact />
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    personal: imageSharp(id: { regex: "/kyle-with-lucas.jpg/" }) {
      sizes(grayscale: true) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            image {
              childImageSharp {
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            title_link
            github
          }
        }
      }
    }
  }
`
