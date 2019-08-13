const camelCase = str => str.replace(/[-_]([a-z])/g, match => match[1].toUpperCase());
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const kebabCase = (str, skipFirst) => {
    const kebabCaseStr = str.replace(/([A-Z])/g, match => '-' + match.toLowerCase());
    return skipFirst ? kebabCaseStr.substring(1) : kebabCaseStr;
};

module.exports = {
    camelCase,
    capitalize,
    kebabCase,
    ClassCase: str => capitalize(camelCase(str)),
};