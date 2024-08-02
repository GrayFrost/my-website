/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '蒜头蒜的空间',
  author: 'Garlic Garlic',
  headerTitle: '蒜头蒜',
  description: '我深怕自己本非美玉，故而不敢加以刻苦琢磨，却又半信自己是块美玉 ，故又不肯庸庸碌碌，与瓦砾为伍。',
  language: 'zh-cn',
  theme: 'system', // system, dark or light
  siteUrl: 'https://z-site-ten.vercel.app',
  siteRepo: 'https://github.com/GrayFrost/my-website',
  siteLogo: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'garyfrost4321@gmail.com',
  github: 'https://github.com/GrayFrost',
  x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com/@garyfrost4321',
  locale: 'zh-cn',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
