// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  https://github.com/${data.questions}/${data.project}

  ## Table of Contents
  [Description](#description)
  [Install](#install)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contribute)
  [Tests](#test)
  [Questions](#questions)

  # Installation
  The following must be installed in order for this application to run: ${data.install}

  # Usage
  To use this application: ${data.usage}

  # Contributing 
  Contributors: ${data.contribute}

  # Test Instructions
  The following is needed to run the application test: ${data.test}

  # Github Username and Link
  Input github username and repo: ${data.name}
`;
}

module.exports = generateMarkdown;
