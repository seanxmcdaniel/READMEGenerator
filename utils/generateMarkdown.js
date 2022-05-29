function renderLicenseBadge(license) {

  if(license === 'MIT') {
    badge =  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'IBM') {
    badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === 'Mozilla') {
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'WTFPL') {
    badge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else {
    badge = ``;
  } return badge;
};

function renderLicenseLink(license) {

  if(license === 'MIT') {
    link = `https://opensource.org/licenses/MIT`;
  } else if (license === 'IBM') {
    link = `https://opensource.org/licenses/IPL-1.0`;
  } else if (license === 'Mozilla') {
    link = `https://www.mozilla.org/en-US/MPL/2.0/`;
  }else if (license === 'WTFPL') {
    link = `https://choosealicense.com/licenses/wtfpl/`;
  } else {
    link = ``;
  } return link;
};


function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge()}

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

  ${renderLicenseLink()}
  
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
