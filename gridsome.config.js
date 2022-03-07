// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
       apiURL: 'http://106.75.226.89:1337', 
       queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts', 'tag'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: 'zjy',
          password: 'Dawn19971029.'
        }
      }
    }
  ],
  templates: {
    StrapiPosts: [
      {
        path: "/post/:id",
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: "/tag/:id",
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
