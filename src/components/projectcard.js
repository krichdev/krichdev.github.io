import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectCardWrapper = styled.div`
  width: 30%;
  margin-bottom: 15px;
  color: ghostwhite;
  img {
    transition: all 0.6s ease-in-out !important;
    filter: grayscale(100);
  }
  &:hover {
    img {
      transform: scale(1.15);
      filter: grayscale(0);
    }
  }
  h3 {
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 80%;
  }
`

const ProjectCardImg = styled.div`
  height: auto;
  margin-bottom: 20px;
`

const ProjectCard = ({ project }) => (
  <ProjectCardWrapper>
    <h3>{project.node.frontmatter.title}</h3>
    <ProjectCardImg>
      <Img sizes={project.node.frontmatter.image.childImageSharp.sizes} />
    </ProjectCardImg>
    <p>{project.node.frontmatter.description}</p>
  </ProjectCardWrapper>
)

export default ProjectCard
