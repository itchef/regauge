const React = require('react')

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer rg-footer" id="footer">
        <div className="footerContainer">
          <section className="rg-copyright">{this.props.config.copyright}</section>
        </div>
      </footer>
    )
  }
}

module.exports = Footer
