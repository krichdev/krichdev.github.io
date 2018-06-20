import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectCardWrapper = styled.div`
  width: 30%;
  margin-bottom: 30px;
  color: ghostwhite;
  h3 {
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 80%;
  }
`
const GithubLink = styled.div`
  width: 50%;
  margin: 0 auto;
  a {
    background-color: ghostwhite;
    color: #164675
    padding: 10px 15px;
    text-decoration: none;
    text-align: center;
    display: block;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.15);
      background-color: #c1111d;
      color: ghostwhite;
    }
  }
`

const ProjectCardImg = styled.div`
  height: auto;
  margin-bottom: 20px;
  img {
    transition: all 0.6s ease-in-out !important;
    filter: grayscale(100);
  }
  &:hover {
    img {
      transform: scale(1.15);
      filter: grayscale(0);
      cursor: pointer;
    }
  }
`

const ProjectCard = ({ project }) => (
  <ProjectCardWrapper>
    <h3>{project.node.frontmatter.title}</h3>
    <ProjectCardImg>
      <a href={project.node.frontmatter.title_link} target="__blank">
        <Img sizes={project.node.frontmatter.image.childImageSharp.sizes} />
      </a>
    </ProjectCardImg>
    <p>{project.node.frontmatter.description}</p>
    <GithubLink>
      <a href={project.node.frontmatter.github} target="__blank">
        Github
      </a>
    </GithubLink>
  </ProjectCardWrapper>
)

export default ProjectCard
