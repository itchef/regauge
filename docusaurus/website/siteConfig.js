const siteConfig = {
  title: "rg-cli",
  tagline: "A command line interface for react app with webpack",
  url: "https://itchef.github.io",
  baseUrl: "/rg-cli/",
  projectName: "rg-cli",
  organizationName: "itchef",
  headerLinks: [
    { doc: "introduction", label: "DOCUMENTATION" },
    { href: "https://github.com/itchef/rg-cli", label: "GITHUB" }
  ],

  headerIcon: "img/Logo-rg-light.png",
  footerIcon: "img/Logo-rg-light.png",
  favicon: "img/favicon.ico",

  colors: {
    primaryColor: "#1A237E",
    secondaryColor: "#3F51B5"
  },

  copyright: {
    prefix: `Copyright © ${new Date().getFullYear()}`,
    owner: {
      name: "ITChef",
      link: "https://github.com/itchef"
    }
  },
  license: {
    name: "MIT-styled",
    link: "https://github.com/itchef/rg-cli/blob/master/LICENSE"
  },
  author: {
    name: "Kaustav Chakraborty",
    link: "https://github.com/phoenixTW"
  },
  highlight: {
    theme: "default"
  },

  scripts: ["https://buttons.github.io/buttons.js"],

  onPageNav: "separate",
  cleanUrl: true,

  enableUpdateTime: true,
  scrollToTop: true,
  docsSideNavCollapsible: true,
  homePage: {
    commands: [
      {
        title: "rg new",
        description:
          "The React Generator CLI makes it easy to create a react application with webpack that already works, right out of the box. It already follows react’s best practices!"
      },
      {
        title: "rg generate",
        description:
          "Generates components with a simple command. The CLI also creates simple test file with it."
      }
    ]
  }
};

module.exports = siteConfig;
