import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BlogWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.8em 0;
    display: flex;
    justify-content: center;
    h2, h3 {
        color: #164675;
    }
`
const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
`

const Blog = () => (
  <BlogWrapper>
    <h2>From my blog</h2> 
  </BlogWrapper>
)

export default Blog