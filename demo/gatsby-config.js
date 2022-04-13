module.exports = {
  plugins: [
    {
      resolve: 'gatsby-layout-builder-a11y',
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
  ],
}
