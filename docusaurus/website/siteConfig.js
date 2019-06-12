const siteConfig = {
  title: 'rg-cli',
  tagline: 'A command line interface for react app with webpack',
  url: 'https://itchef.github.io',
  baseUrl: '/rg-cli/',
  projectName: 'rg-cli',
  organizationName: 'itchef',
  headerLinks: [
    {href: '/', label: 'DOCUMENTATION'},
    {href: 'https://github.com/itchef/rg-cli', label: 'GITHUB'},
  ],

  headerIcon: 'img/Logo-rg-light.png',
  footerIcon: 'img/Logo-rg-light.png',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#1A237E',
    secondaryColor: '#3F51B5',
  },

  copyright: `Copyright © ${new Date().getFullYear()} ITChef. Authored by Kaustav Chakraborty`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,

  enableUpdateTime: true,
  homePage: {
    commands: [
      {
        title: 'rg new',
        description: 'The React Generator CLI makes it easy to create a react application with webpack that already works, right out of the box. It already follows react’s best practices!',
      },
    ],
  },
}

module.exports = siteConfig
