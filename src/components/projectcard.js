import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components' 

const ProjectCardWrapper = styled.div`
    width: 30%;
    margin-bottom: 15px;
    color: ghostwhite;
    h3 {
        text-align: center;
    }
    @media(max-width: 640px){
        width: 80%;
    }
`

const ProjectCardImg = styled.div`
    height: 278px;
`

const ProjectCard = ({project}) => (
  <ProjectCardWrapper>
      <h3>{project.title}</h3>
      <ProjectCardImg>
        <img src={project.img} />
      </ProjectCardImg>
      <p>{project.description}</p>
  </ProjectCardWrapper>
)

export default ProjectCard