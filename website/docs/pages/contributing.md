# Contributing

The following is a set of guidelines for contributing to regauge. Please spend few minutes in reading these guidelines before you create an issue or pull request.

## Code of Conduct

We have adopted a [Code of Conduct](/pages/CODE_OF_CONDUCT) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All code level work for regauge happens on [Github](https://github.com/itchef/regauge). External contributors are welcome to send pull requests which will go through the review process by the core team.

## Branch Organization

We follow the trunk based development. Hence we maintain only single branch `master`. If you send a bugfix pull request, feature pull request, please do it against the `master` branch.

## Bugs & Features

We are using [GitHub Issues](https://github.com/itchef/regauge/issues) for bug and feature tracing. The best way to contribute with bug fixes is by creating a new bug using this [template](https://github.com/itchef/regauge/issues/new?template=1-bug-report.md).

If You want to propose a new feature, please use this [feature template](https://github.com/itchef/regauge/issues/new?template=2-feature-request.md) to create a new feature request.

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

To help you play around the codebase and familiar with our contribution process, we have a list of good first issues that contain bugs or small features that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody already started working on an issue but no update enlisted for more than three weeks, it's fine to pick that up, but you should still leave a comment and tag that person.

## Sending a Pull Request

The [core team](https://github.com/orgs/itchef/people) is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Fork the repository and create your branch from [proper branch](#branch-organization).
2. Make sure your node version >= `11.5.0`
3. Run `npm install` in the repository root.
4. If you've fixed a bug or added code that should be tested, add tests! _(We are yet to finalize on the testing strategy for the cli tasks. But it would be a plus if you could come up with one.)_
5. Ensure the test suite passes `(npm test)`.

## Development Workflow

After cloning antd, run `npm install` to fetch its dependencies. Then, you can run several commands:

1. `./bin/run COMMAND`. Check all cli commands [here](/pages/cli-command-new).
2. `npm test` runs the complete test suite.
3. `npm version` shows the latest released version of the application.
