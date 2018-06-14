import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ProjectsWrapper = styled.div`
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

const Projects = ({projects}) => (
  <ProjectsWrapper>
    <h2>Stuff I've Worked On</h2>
    {projects.map(project => (
        <p>{project.title}</p>
    ))}
  </ProjectsWrapper>
)

export default Projects