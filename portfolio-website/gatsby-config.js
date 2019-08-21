module.exports = {
  siteMetadata: {
    title: `Edward Portfolio`,
    description: `Website that will be used to show my stuff`,
    author: `Edward Fernandez (@edanfesi)`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edward Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#007AFF`,
        theme_color: `#007AFF`,
        display: `minimal-ui`,
        icon: `src/images/page-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
