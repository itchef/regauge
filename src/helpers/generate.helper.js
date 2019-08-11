const path = require("path");
const { Dir, File, Logger } = require("@itchef/rg-lib");
const { execSync } = require("child_process");

const updateWithName = (componentPath, name, template) => {
  const newComponentPath = componentPath.replace(template, name.toLowerCase());
  new File(componentPath)
    .read()
    .update("COMPONENT_NAME", name)
    .write(newComponentPath);
};

const copyBaseFiles = (basicComponentDir, temp) => {
  new Dir(basicComponentDir)
    .read()
    .map(file => path.join(basicComponentDir, file))
    .forEach(filePath => new Dir(filePath).copy(temp));
};

const generateComponent = (name, { temp, templates }) => {
  const workingDirectory = process.cwd();
  Logger.info(`${name} component is getting created into ${workingDirectory}`);
  new Dir(temp).cd();
  let basicComponentDir = path.join(
    templates._dirName,
    "components/basic-component"
  );
  copyBaseFiles(basicComponentDir, temp);
  new Dir(temp)
    .read()
    .map(file => updateWithName(file, name, "BasicComponent"));
  execSync(`rm ${temp}/BasicComponent*`);
  new Dir(temp).copy(path.join(workingDirectory, name));
  new Dir(temp).clean();
};

const generateStyle = (name, { temp, templates }) => {
  const workingDirectory = process.cwd();
  const tempDir = new Dir(temp);
  const folder = "styles";
  const templateInitial = "style";
  const styles = path.join(templates._dirName, folder);

  Logger.info(`${name} style is getting created into ${workingDirectory}`);

  tempDir.cd();
  copyBaseFiles(styles, temp);
  tempDir.read().map(file => updateWithName(file, name, templateInitial));
  execSync(`rm ${temp}/${templateInitial}*`);
  new Dir(`${temp}/${name}*`).copy(workingDirectory);
  new Dir(temp).clean();
};

module.exports = {
  generateComponent,
  generateStyle
};
