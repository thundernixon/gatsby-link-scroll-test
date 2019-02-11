const path = require('path')

const {
    createFilePath
} = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({
    node,
    actions,
    getNode
}) => {
    const {
        createNodeField
    } = actions
    // We only want to operate on `Mdx` nodes. If we had content from a
    // remote CMS we could also check to see if the parent node was a
    // `File` node here
    if (node.internal.type === 'Mdx') {
        // const value = createFilePath({ node, getNode })
        const slug = createFilePath({
            node,
            getNode,
            basePath: `projects/`
        })
        createNodeField({
            // 1) this is the name of the field you are adding,
            name: `slug`,
            // 2) this node refers to each individual MDX
            node,
            value: slug.split('/')[1],
        })
    }
}

exports.createPages = ({
    graphql,
    actions
}) => {
    // Destructure the createPage function from the actions object
    const {
        createPage
    } = actions
    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
          {
            allMdx(sort: { order: ASC, fields: [frontmatter___project] }) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    project
                    designer
                  }
                }
              }
            }
          }
        `
            ).then(result => {
                // this is some boilerlate to handle errors
                if (result.errors) {
                    console.error(result.errors)
                    reject(result.errors)
                }
                const posts = result.data.allMdx.edges

                // We'll call `createPage` for each result
                posts.forEach(({
                    node
                }, index) => {
                    const prev =
                        index === 0 ? posts[posts.length - 1].node : posts[index - 1].node
                    const next =
                        index === posts.length - 1 ? posts[0].node : posts[index + 1].node
                    createPage({
                        // This is the slug we created before
                        // (or `node.frontmatter.slug`)
                        path: node.fields.slug,
                        // This component will wrap our MDX content
                        component: path.resolve(`./src/layouts/project.js`),
                        // We can use the values in this context in
                        // our page layout component
                        context: {
                            id: node.id,
                            prev,
                            next
                        },
                    })
                })
                return posts
            })
        )
    })
}