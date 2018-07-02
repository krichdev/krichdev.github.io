import React from 'react'
import { Link } from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  blockquote {
    font-style: italic;
    text-align: center;
    background-color: #eee;
    padding: 3px 0;
    font-size: .85em;
  }
`;

const PostWrapper = styled.div`
  width: 55vw;
  padding: 25px;
  margin: 20px auto;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h1 {
      border-bottom: 3px solid;
      padding-bottom: 3px;
  }
  @media (max-width: 640px) {
      width: 90vw
  }
`

const PostInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  align-items: baseline;
  p {
      flex-grow: 1
      margin-right: auto;
  }
  @media (max-width: 640px) {
    display: inline;
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

const Post = props => {
    const postNode = props.data.markdownRemark;
    const post = postNode.frontmatter
    return (
        <PostWrapper>
            <h1>{post.title}</h1>
            <PostInfoRow>
                <p>{postNode.timeToRead} minute read | <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{post.category}</span></p>
                {post.tags && post.tags.map(tag => (
                    <CategoryTag>
                        {tag}
                    </CategoryTag>
                ))}
            </PostInfoRow>
            <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </PostWrapper>
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
                tags
            }
        }
    }
`