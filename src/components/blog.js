import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BlogWrapper = styled.div`
  width: 100%;
  padding: 1.8em 0;
  display: flex;
  justify-content: center;
  h2,
  h3 {
    color: #164675;
  }
`
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`
const BlogProjectCard = styled.div`
  width: 80vw;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`

const Blog = () => (
  <BlogWrapper>
    <BlogContainer>
      <h2>Blog</h2>
      <BlogProjectCard />
      <BlogProjectCard />
      <BlogProjectCard />
    </BlogContainer>
  </BlogWrapper>
)

export default Blog
