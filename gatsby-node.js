const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === 'blog') {
        let slug = `/${_.kebabCase(node.frontmatter.title)}`
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        const postTemplate = path.resolve('./src/templates/post.js')
        resolve(
            graphql(`
                {
                    posts: allMarkdownRemark {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    category
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                    if (result.errors) {
                        console.log(`there are errors: ${result.errors}`)
                    }
                    const posts = result.data.posts.edges
                    posts.forEach(edge => {
                        if (edge.node.fields != null) {
                            createPage({
                                path: edge.node.fields.slug, //required
                                component: postTemplate,
                                context: {
                                    slug: edge.node.fields.slug
                                }
                            })
                        }
                    })
                })
        )
    })
}