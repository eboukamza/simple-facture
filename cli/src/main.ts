import fs from 'fs'

import { buildGenerateInvoiceDocument, Invoice } from 'simple-facture-core'

import { checkDataDir, checkDataFile, writeFile } from './utils'
import { generatePdf } from './generate-pdf'

// init
checkDataDir('out')
// Check invoice data file or generate simple data
checkDataFile('invoice.json')

// generate invoice
let invoice: Invoice = JSON.parse(fs.readFileSync('./invoice.json').toString())
const outputFileName = `Fact ${invoice.company.name} nº ${invoice.number}.pdf`

const generateInvoiceDocument = buildGenerateInvoiceDocument(invoice.lang)

generatePdf(generateInvoiceDocument(invoice))
  .then((pdfData: Buffer) => writeFile(`./out/${outputFileName}`, pdfData))
  .then(() => console.log(`${outputFileName} created!`))
  .catch(console.error)
