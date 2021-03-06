// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch(license){
  case "none":
    return ""
  case "MIT":
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  case "Mozilla":
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  case "Apache":
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
  return ""
  } else {
    return `\n* [License](#license) \n`
  }

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  }
  else {
      return `## License
The license for this application is: ${license}`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Tests
${data.tests}

## Contributing
${data.contributing}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, you can reach me at ${data.email} or on GitHub at github.com/${data.github}


`


;
}

module.exports = generateMarkdown;
