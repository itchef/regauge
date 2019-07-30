const { cli } = require("cli-ux");
const { getAuthorName } = require("./git.helper");

const AUTHOR_NAME_KEY = "Author Name";
const DESCRIPTION_KEY = "Description";
const VERSION_KEY = "Version";
const LICENSE_KEY = "License";
const KEYWORDS_KEY = "Keywords";

const trimKeyword = keyword => keyword.trim();

const processUserInput = async appName => {
  const description = await cli.prompt(DESCRIPTION_KEY, { default: "" });
  const author = await cli.prompt(AUTHOR_NAME_KEY, {
    default: getAuthorName()
  });
  const version = await cli.prompt(VERSION_KEY, { default: "0.0.0" });
  const license = await cli.prompt(LICENSE_KEY, { default: "ISC" });
  const keywords = await cli.prompt(KEYWORDS_KEY, { default: "" });
  return {
    name: appName,
    description,
    author,
    version,
    license,
    keywords: keywords.split(",").map(trimKeyword)
  };
};

module.exports = { processUserInput };
