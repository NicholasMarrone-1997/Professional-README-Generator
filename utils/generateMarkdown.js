// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "") {
    return data.license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === "") {
    return data.license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.project}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]

  ## Table of Contents
  - [Description](#description)
  - [Install](#install)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribute)
  - [Tests](#test)
  - [Questions](#questions)

  # Installation
  The following must be installed in order for this application to run: ${data.install}

  # Usage
  To use this application: ${data.usage}

  # Contributing 
  Contributors: ${data.contribute}

  # Test Instructions
  The following is needed to run the application test: ${data.test}

  # Questions
  To Find Me on Github: [${data.questions}](https://github.com/${data.questions})
  Email Me With Questions: ${data.questions2}

  # Google Drive Link
  [Link to Professional README Generator](https://drive.google.com/file/d/1ZjSHBcwfIDhW4MBtRCSt4M6g2et3han8/view)

`;
}

module.exports = generateMarkdown;