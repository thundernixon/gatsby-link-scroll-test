module.exports = {
  siteMetadata: {
    title: 'Link Scroll Test',
    description: 'A site to test Gatsby Link components and scrolling',
    author: '@thundernixon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/projects/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [{
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1800,
            sizeByPixelDensity: false,
            linkImagesToOriginal: false,
          },
        }, ],
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layouts/global-layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}