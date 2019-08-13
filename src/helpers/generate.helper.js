const path = require("path");
const { Dir, File, Logger } = require("@itchef/rg-lib");
const { execSync } = require("child_process");
const { ClassCase, kebabCase } = require("../utils/dev-kit/helpers");

const updateWithName = (componentPath, name, template) => {
  const newComponentPath = componentPath.replace(template, name);
  new File(componentPath)
    .read()
    .update("COMPONENT_NAME", ClassCase(name))
    .write(newComponentPath);
};

const copyBaseFiles = (basicComponentDir, temp) => {
  new Dir(basicComponentDir)
    .read()
    .map(file => path.join(basicComponentDir, file))
    .forEach(filePath => new Dir(filePath).copy(temp));
};

const generator = (name, config) => {
  Logger.info(`${name} ${config.type} is getting created into ${config.dest}`);

  config.tmp.cd();
  copyBaseFiles(config.src, config.tmp._dirName);
  config.tmp.read().map(file => updateWithName(file, name, config.template));
  execSync(`rm ${config.tmp._dirName}/${config.template}*`);
  new Dir(config.copyFrom).copy(config.dest);

  config.tmp.clean();
};

const generateComponent = (name, { temp, templates }) => {
  const config = {
    type: "component",
    tmp: new Dir(temp),
    src: path.join(templates._dirName, "components/basic-component"),
    template: "BasicComponent",
    copyFrom: temp,
    dest: path.join(process.cwd(), kebabCase(name, true))
  };

  generator(name, config);
};

const generateStyle = (name, { temp, templates }) => {
  const config = {
    type: "style",
    tmp: new Dir(temp),
    src: path.join(templates._dirName, "styles"),
    template: "style",
    copyFrom: path.join(temp, `${name}*`),
    dest: process.cwd()
  };

  generator(name, config);
};

module.exports = {
  generateComponent,
  generateStyle
};
