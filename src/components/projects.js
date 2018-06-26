import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ProjectCard from './projectcard'

const ProjectsWrapper = styled.div`
    width: 100%;
    padding: 1.8em 0;
    background-color: #164675;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: ghostwhite;
    }
`
const ProjectsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 640px){
        flex-direction: column;
        align-items: center;
    }
    width: 90%;
`

const Projects = ({ projects }) => (
    <ProjectsWrapper>
        <h2>Stuff I've Worked On</h2>
        <ProjectsContainer>
            {projects.map(project => (
                <ProjectCard key={project.node.frontmatter.title} project={project} />
            ))}
        </ProjectsContainer>
    </ProjectsWrapper>
)

export default Projects