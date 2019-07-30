const React = require("react");

class Footer extends React.Component {
  copyrightSection = (copyright, author) => (
    <section className="rg-copyright">
      {copyright.prefix}&nbsp;
      <a className="rg-link" href={copyright.owner.link}>
        {copyright.owner.name}
      </a>
      .&nbsp;
      <span className="rg-author">
        Authored by&nbsp;
        <a className="rg-link" href={author.link}>
          {author.name}
        </a>
        .
      </span>
    </section>
  );

  render() {
    const { copyright, license, author } = this.props.config;
    return (
      <footer className="nav-footer rg-footer" id="footer">
        <div className="footerContainer">
          {this.copyrightSection(copyright, author)}
          <section className="rg-license-container">
            Code licensed under an&nbsp;
            <a className="rg-link" href={license.link}>
              {license.name}
            </a>
            &nbsp;License.
          </section>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
