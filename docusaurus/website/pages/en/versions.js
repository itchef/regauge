const React = require("react");

const CompLibrary = require("../../core/CompLibrary");

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

const Title = ({ children }) => <h1>{children}</h1>;

const VersionDetails = ({ latestVersion, config, repo }) => (
  <table className="versions__container">
    <tbody>
      <tr>
        <th>{latestVersion}</th>
        <td>
          <a href={`${config.baseUrl}${config.docsUrl}/introduction`}>
            Documentation
          </a>
        </td>
        <td>
          <a href={`${repo}/releases/tag/v${latestVersion}`}>Release Notes</a>
        </td>
      </tr>
    </tbody>
  </table>
);

const Version = ({ config, latest, repo, children }) => (
  <div className="current-version__wrapper">
    <h3 className="current-version__header">{children}</h3>
    <VersionDetails config={config} latestVersion={latest} repo={repo} />
  </div>
);

const PastVersions = ({ children, latest, config }) => (
  <div className="current-version__wrapper">
    <h3 className="current-version__header">{children}</h3>
    <p>Here you can find documentation for previous versions of regauge.</p>
    <table className="versions__container">
      <tbody>
        {versions.map(
          version =>
            version !== latest && (
              <tr key={version}>
                <th>
                  {version === versions[versions.length - 1] ? "<=" : ""}
                  {version}
                </th>
                <td>
                  <a
                    href={`${config.baseUrl}${
                      config.docsUrl
                    }/${version}/installation`}
                  >
                    Documentation
                  </a>
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  </div>
);

const Master = ({ config, repo, branch, children }) => (
  <div className="current-version__wrapper">
    <h3 className="current-version__header">{children}</h3>
    <table className="versions__container">
      <tbody>
        <tr>
          <th>{branch}</th>
          <td>
            <a href={`${config.baseUrl}${config.docsUrl}/next/introduction`}>
              Documentation
            </a>
          </td>
          <td>
            <a href={repo}>Source Code</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Versions = props => {
  const { config: siteConfig } = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${
    siteConfig.projectName
  }`;
  return (
    <section className="versions__wrapper" id="versions">
      <Title>{siteConfig.title} Versions</Title>
      <Version config={siteConfig} repo={repoUrl} latest={latestVersion}>
        Current version (Stable)
      </Version>
      <Master config={siteConfig} repo={repoUrl} branch="master">
        Latest Version <i>(Unreleased)</i>
      </Master>
      <p>
        You can find past versions of this project on{" "}
        <a href={`${repoUrl}/releases`}>GitHub</a>.
      </p>
    </section>
  );
};

Versions.title = "Versions";

module.exports = Versions;
