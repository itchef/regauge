/**
 * Copyright (c) 2019, ITChef.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);
const homePageConfig = siteConfig.homePage;
function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a
          className="button heroBannerButton"
          href={this.props.href}
          target={this.props.target}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer heroBannerWrapper">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = () => (
  <h5 className="projectTitle">
    React Generator CLI
    <small className="projectTagLine">{siteConfig.tagline}</small>
  </h5>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div>{props.children}</div>
    </div>
  </div>
);

const ConsoleSection = () => (
  <div className="consoleSectionWrapper">
    <div className="consoleMenuBar">
      <div className="actionButton circle red" />
      <div className="actionButton circle yellow" />
      <div className="actionButton circle green" />
    </div>
    <div className="consoleContent">
      <span>> npm install -g regauge</span>
      <span>> rg new my-app</span>
      <span>> cd my-app</span>
      <span>> npm start</span>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <ConsoleSection />
        <div className="inner projectBanner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl("getting-started", language)}>
              Get Started
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={props.padding}
    id={props.id}
    background={props.background}
  >
    <GridBlock
      align={props.align}
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);
Block.defaultProps = {
  padding: ["bottom", "top"]
};

const Features = () =>
  homePageConfig.commands.map(command => (
    <div className="featureWrapper">
      <h3>{command.title}</h3>
      <p>{command.description}</p>
    </div>
  ));

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
