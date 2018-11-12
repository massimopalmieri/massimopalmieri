module.exports = {
  siteMetadata: {
    title: 'Massimo Palmieri - Front-end engineer',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Massimo Palmieri personal website',
        short_name: 'Massimo Palmieri',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-670875-1'
      }
    }
  ]
}
