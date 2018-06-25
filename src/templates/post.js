import React from 'react'
import { Link } from 'gatsby-link'
import styled from 'styled-components'


const Post = props => {
    const postNode = props.data.markdownRemark;
    const post = postNode.frontmatter
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{postNode.timeToRead}</p>
            <p>{post.category}</p>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </div>
    )
}

export default Post;

export const postQuery = graphql`
    query PostBySlug($slug: String!){
        markdownRemark(fields: { slug: {eq: $slug }}){
            html
            timeToRead
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                category
            }
        }
    }
`