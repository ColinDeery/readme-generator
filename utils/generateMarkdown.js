// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![MIT](https://img.shields.io/badge/license-MIT-blue)`

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.intallation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ${renderLicenseBadge(data.license)}

  # Test
  ${data.test}

  ## Contributions
  ${data.contributions}

  ## Contact Info
  Github: [${data.github}](https://github.com/${data.github}/)
  eMail: ${data.email}`;
}

module.exports = generateMarkdown;
