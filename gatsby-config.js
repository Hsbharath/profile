/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `hsbharath.dev`,
    description: `I am a web developer with 7 years of experience in front and technologies`,
    author: `hsbharath`,
    siteUrl: `https://hsbharath.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-LZ8XFKB8D7"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/redketchup/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Akatab`,
            file: `https://fonts.googleapis.com/css2?family=Akatab&display=swap`,
          },
        ],
      },
    },
  ],
}
