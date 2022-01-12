/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata : 
  {
    title: "Simply Recipes",
    description : "Nice and clean recipes site",
    author : "@summichauhan",
    person:{name:"summi",age:21},
    simpleData:["item 1" ,"item 2"],
    complexData: [
      {name:"summi",age:21},
      {name:"suman",age:20},
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: `${__dirname}/src/assets/css`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `example`,
    //     path: `${__dirname}/src/example`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `project`,
    //     path: `${__dirname}/src`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACEID1,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:process.env.CONTENTFUL_API_KEY1,
      },
    },
  ],
}
