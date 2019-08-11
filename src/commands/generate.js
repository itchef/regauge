const { Command, flags } = require("@oclif/command");
const {
  generateComponent,
  generateStyle
} = require("../helpers/generate.helper");
const bootstrap = require("../utils/dev-kit/bootstrap");

class GenerateCommand extends Command {
  async run() {
    const generators = {
      component: generateComponent,
      c: generateComponent,
      style: generateStyle,
      s: generateStyle
    };
    const { args } = this.parse(GenerateCommand);
    generators[args.generator](args.name, bootstrap);
  }
}

GenerateCommand.description =
  "Generate new files. Such as components, modules etc.";

GenerateCommand.args = [
  {
    name: "generator",
    required: true,
    description: "What you want to generate",
    options: ["component", "c", "style", "s"]
  },
  {
    name: "name",
    required: true,
    description: "Name of the generated element"
  }
];

GenerateCommand.examples = [
  "$ rg generate component COMPONENT",
  "$ rg g c COMPONENT"
];

GenerateCommand.aliases = ["g"];

GenerateCommand.flags = {
  help: flags.help({ char: "h" })
};

module.exports = GenerateCommand;
