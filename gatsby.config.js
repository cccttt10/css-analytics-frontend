module.exports = {
    siteMetadata: {
        title: 'CSS Analytics',
        description: 'CSS Analytics'
    },
    plugins: [
        'gatsby-plugin-theme-ui',
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true // defaults to false
            }
        }
    ]
};
