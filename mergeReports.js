const fs = require('fs');
const path = require('path');
const merge = require('mochawesome-merge');
const marge = require('mochawesome-report-generator');

const reportDir = 'cypress/reports';
const reportFiles = fs.readdirSync(reportDir).filter(file => file.endsWith('.json'));

const validReports = [];

reportFiles.forEach(file => {
  const filePath = path.join(reportDir, file);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    JSON.parse(data); // Check if JSON is valid
    validReports.push(filePath);
  } catch (e) {
    console.error(`Invalid JSON file: ${filePath}`, e);
  }
});

if (validReports.length > 0) {
  merge(validReports).then(report => {
    const reportPath = path.join(reportDir, 'report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    marge.create(report, { reportDir }).then(() => {
      console.log('HTML report generated');
    }).catch(console.error);
  }).catch(console.error);
} else {
  console.error('No valid reports to merge.');
}
