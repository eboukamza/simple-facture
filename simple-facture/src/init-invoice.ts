import fs from 'fs'
import path from 'path'
const templateName = process.argv[2];

const templatePath = path.join(__dirname, '../templates')
const templates = fs.readdirSync(templatePath)

if (!templateName) {
  console.error('ERROR: Missing template name')
  console.log('Usage: simple-facture-init [TEMPLATE_NAME]')
  console.log('Available template are:')
  templates.forEach((template => console.log(`- ${template}`)))
  process.exit(1)
}

if (!templates.some(template => template === templateName)) {
  console.error('ERROR: Unknown template name')
  console.log('Available template are:')
  templates.forEach((template => console.log(`- ${template}`)))
  process.exit(1)
}

fs.copyFileSync(path.join(templatePath, templateName), 'invoice.json')
console.log('invoice.json created!')
