module.exports = {
  siteMetadata: {
    title: `TreePlanters`,
    author: `Jack Jona`,
    description: `Learn how you can help prevent earth’s climate breaking down before it's too late.`,
    siteUrl: `https://TreePlanters.jackjona.live/`,
    defaultImage: `https://cdn.jsdelivr.net/gh/jackjona123/TreePlanters@assets/default.jpg`,
    social: {
      twitter: `jackjona123`
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#00B364",
        // Configure paths where the scroll indicator will appear
        paths: [
          "/change-how-you-eat",
          "/change-how-you-travel",
          "/change-your-lifestyle",
          "/change-your-job",
          "/choose-renewable-energy",
          "/use-less-energy"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-186968818-10",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        cookieDomain: "treeplanters.jackjona.live"
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://jackjona.us1.list-manage.com/subscribe/post?u=e52fd31b4b26cc754c9ca4496&amp;id=33995af06a"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-yaml",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TreePlanters`,
        short_name: `TreePlanters`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00B364`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`
  }
};
