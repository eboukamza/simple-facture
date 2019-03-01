const pdfMakePrinter = require('pdfmake/src/printer');

const fonts = {
  Ubuntu: {
    normal: './fonts/Ubuntu-Regular.ttf',
    bold: './fonts/Ubuntu-Bold.ttf'
  }
};

const printer = new pdfMakePrinter(fonts);

/**
 * @param docDefinition document to print as pdf
 * @returns {Promise<Buffer>} pdf as binary data
 */
const generatePdf = (docDefinition) => {

  return new Promise((success, reject) => {
    try {

      const doc = printer.createPdfKitDocument(docDefinition);

      let chunks = [];

      doc.on('data', (chunk) => {
        chunks.push(chunk);
      });

      doc.on('end', () => {
        success(Buffer.concat(chunks));
      });

      doc.end();

    } catch (err) {
      reject(err)
    }
  })
};

module.exports = generatePdf;
