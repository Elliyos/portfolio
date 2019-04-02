const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kyle McCaw - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Kyle', // Alternative Site title for SEO
  siteTitleShort: 'Kyle', // short_name for manifest
  siteHeadline: 'Creating apps for the next generation.', // Headline for schema.org JSONLD
  siteUrl: 'https://kylemccaw.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Kyle McCaw dev portfolio',
  author: 'Kyle McCaw', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kylexcvi', // Twitter Username
  ogSiteName: 'kylexcvi', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
