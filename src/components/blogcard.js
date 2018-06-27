import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const BlogCardWrapper = styled.div`
  width: 80vw;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
  h2 {
      border-bottom: 3px solid;
      padding-bottom: 3px;
  }
`
const CategoryTag = styled.div`
  font-size: .75em;
  color: white;
  display: inline;
  background-color: #164675;
  border-radius: 3px;
  padding: 5px;
  margin-right: 5px;
`


const BlogCard = ({ post }) => (
    <BlogCardWrapper>
        <h2>{post.node.frontmatter.title}</h2>
        <p>{post.node.excerpt}</p>
        {post.node.frontmatter.tags && post.node.frontmatter.tags.map(tag => (
            <CategoryTag>
                {tag}
            </CategoryTag>
        ))}
    </BlogCardWrapper>
)

export default BlogCard