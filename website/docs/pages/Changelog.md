# Changelog

`regauge` strictly follows [Semantic Versioning 2.0.0](https://semver.org/).

## [Unreleased](https://github.com/itchef/regauge/compare/v0.5.0...master)

### Planned

* Add unit tests.
* Add contract test.

### Added

* Moved documentation from [docusaurus](https://docusaurus.io/) to [docsify](https://docsify.js.org/#/).
* Google Analytics to documentation website.

## [0.5.0](https://github.com/itchef/regauge/compare/v0.4.1...v0.5.0) _(10.10.2019)_

### Changed

* Renamed CLI Command `rg` to `regauge`.

## [0.4.1](https://github.com/itchef/regauge/compare/v0.4.0...v0.4.1) _(24.8.2019)_

### Changed

* Renamed CLI Command `rg` to `regauge`.

## [0.4.0](https://github.com/itchef/regauge/compare/v0.3.4...v0.4.0) _(23.8.2019)_

### Added

* New stylesheet generator command.
* generate component will have flag --style=scss to generate a new stylesheet along with component.

### Removed

* Past version section from documentation's version page.

## [0.3.4](https://github.com/itchef/regauge/compare/v0.3.3...v0.3.4) _(9.8.2019)_

### Added

* App component inside `components` directory.
* Newly generated component contains special character in it's body.
* Re-introduced missing jest configuration.

## [0.3.3](https://github.com/itchef/regauge/compare/v0.3.2...v0.3.3) _(7.8.2019)_

### Fixed

* Added missing webpack config on base react template.

## [0.3.2](https://github.com/itchef/regauge/compare/v0.3.1...v0.3.2) _(7.8.2019)_

### Fixed

* Fixed CLI is unable to find templates folder.

## [0.3.1](https://github.com/itchef/regauge/compare/v0.3.0...v0.3.1) _(6.8.2019)_

### Changed

* Renamed React Generator CLI to regauge in documentation.

## [0.3.0](https://github.com/itchef/regauge/compare/v0.2.0...v0.3.0) _(6.8.2019)_

### Added

* Introduced Issue templates for a new feature, bugs.
* Introduced Code of Conduct for the project.
* Introduction of Contributing guidelines.
* Keywords for projects.

### Changed

* Renamed package name `rg-cli` to `regauge`.

## [0.2.0](https://github.com/itchef/regauge/compare/v0.1.0...v0.2.0) _(30.7.2019)_

### Added

* Prompts for user's custom configuration during project setup.
* `rg generate COMPONENT <name>` command to generate component in the current directory.
* `nvmrc` file to maintain similar node version during development.
* Documentation for CLI commands.
* Template for base react application.
* Configured [docusaurus](https://docusaurus.io/) as documentation website.

## [0.1.0](https://github.com/itchef/regauge/compare/a32d4894612e4a21ec0e21a426b4a7bba9a5c5e6...v0.1.0) _(9.6.2019)_

### Added

* `new` command to generate new react workspace.
* Logger utils to the project.
* `npm install` task after `new` command.
