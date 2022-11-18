import fs from 'fs'

import { getInvoiceDocument } from 'simple-facture-core'

import { checkDataDir, checkDataFile, writeFile } from './utils'
import { generatePdf } from './generate-pdf'
import invoiceSimple from './simple-invoice.json'

// init
checkDataDir('out')
// Load invoice data or generate simple data
checkDataFile('invoice.json', JSON.stringify(invoiceSimple, null, 2))

// generate invoice
let invoice = JSON.parse(fs.readFileSync('./invoice.json').toString())
const outputFileName = `Facture ${invoice.company.name} nº ${invoice.number}.pdf`

generatePdf(getInvoiceDocument(invoice))
  .then((pdfData: Buffer) => writeFile(`./out/${outputFileName}`, pdfData))
  .then(() => console.log(`${outputFileName} created!`))
  .catch(console.error)
