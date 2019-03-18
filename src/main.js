const fs = require('fs');
const {checkDataDir, checkDataFile, writeFile} = require('./utils');
const getInvoiceDocument = require('./get-invoice-document');
const generatePdf = require('./generate-pdf');

// init
checkDataDir('out');
// Load invoice data or generate simple data
let invoiceSimple = JSON.stringify(require('./simple-invoice.json'), null, 2);
checkDataFile('invoice.json', invoiceSimple);

// generate invoice
let invoice = JSON.parse(fs.readFileSync('./invoice.json'));
const outputFileName = `Facture ${invoice.company.name} nº ${invoice.number}.pdf`;

generatePdf(getInvoiceDocument(invoice))
  .then((pdfData) => writeFile(`./out/${outputFileName}`, pdfData))
  .then(() => console.log(`${outputFileName} created!`))
  .catch(console.error);
