// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'GNU GPLv3') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'Apache 2.0') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'ISC') {
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    } else {
        return '';
    }
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'GNU GPLv3') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'Apache 2.0') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'ISC') {
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU GPLv3') {
        return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Apache 2.0') {
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'ISC') {
        return '[ISC](https://opensource.org/licenses/ISC)';
    } else {
        return '';
    }
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU GPLv3') {
        return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Apache 2.0') {
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'ISC') {
        return '[ISC](https://opensource.org/licenses/ISC)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) { 
  if (license === 'MIT') {
      return 'This project is licensed under the MIT license.';
  }
}
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
      return 'This project is licensed under the MIT license.';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
- [Contact](#contact)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions
If you have any questions, please reach out to me at ${data.email}.
You can also visit my GitHub profile at [${data.github}](

## Contact
If you have any questions, please reach out to me at ${data.email}.
You can also visit my GitHub profile at [${data.github}](
`;
}

export default generateMarkdown;
