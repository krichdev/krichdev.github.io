import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import BlogCard from './blogcard'

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

const Blog = ({ posts }) => (
  <BlogWrapper>
    <BlogContainer>
      <h2>Blog</h2>
      {posts.map(post => (
        <Link key={post.node.fields.slug} to={post.node.fields.slug} style={{ textDecoration: 'none', color: 'black' }}>
          <BlogCard post={post} />
        </Link>
      ))}
    </BlogContainer>
  </BlogWrapper>
)

export default Blog
