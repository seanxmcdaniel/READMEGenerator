function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'IBM':
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    case 'Mozilla':
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'WTFPL':
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    default:
    return ''
  }
};

function renderLicenseLink(license) {

  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
    case 'IBM':
    return `https://opensource.org/licenses/IPL-1.0`
    case 'Mozilla':
    return `https://www.mozilla.org/en-US/MPL/2.0/`
    case 'WTFPL':
    return `https://choosealicense.com/licenses/wtfpl/`
    default:
    return ''
  }
};


function generateMarkdown(data) {
  var badge = renderLicenseBadge();
  var link = renderLicenseLink();

  return `# ${data.title}
  ${badge}

  ## Table of Contents

  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Demo Video](#Project-Demo-Video)
  * [Questions?](#questions)

  ## Project Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under ${data.license}. 

  ${link}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Project Demo Video
  
  ${data.test}
  
  ## Questions
  
  please feel free to ask me any questions.
  
  Github username: ${data.username}
  
  Github Email: ${data.email}

`;
}

module.exports = generateMarkdown;
