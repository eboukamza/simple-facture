import { TDocumentDefinitions } from 'pdfmake/interfaces'

import { Invoice } from './models'
import { getGrossTotal, getNetTotal, getVATTotal } from './calculator.utils'
import { buildUtils } from './print-invoice.utils'

const generateInvoiceDocumentEs = (invoice: Invoice): TDocumentDefinitions => {
  const { printLines, printPrice, RIGHT } = buildUtils(invoice.lang)

  return {
    content: [
      { text: `Factura nº ${invoice.number}`, style: 'h4' },
      { text: `Fecha: ${invoice.date}`, style: 'h4' },
      invoice.purchaseOrder ? { text: `Referencia: ${invoice.purchaseOrder}`, style: 'h4' } : '',
      '\n\n',
      { text: 'De', style: 'h4' },
      `${invoice.company.name}`,
      `${invoice.company.address.street}`,
      `${invoice.company.address.zipCode}, ${invoice.company.address.city}`,
      `${invoice.company.email}`,
      { text: 'Cliente', alignment: RIGHT, style: 'h4' },
      { text: invoice.customer.name, alignment: RIGHT },
      { text: invoice.customer.address.street, alignment: RIGHT },
      { text: `${invoice.customer.address.zipCode} ${invoice.customer.address.city}`, alignment: RIGHT },
      { text: `NIF/CIF : ${invoice.customer.vat}`, alignment: RIGHT },
      '\n\n\n',
      '\n\n\n',
      {
        table: {
          headerRows: 1,
          widths: ['40%', '*', 'auto', 'auto', '*', '*'],
          body: [
            [
              { text: 'Concepto', style: 'h4' },
              { text: 'Fecha fin', style: 'h4' },
              { text: 'Precio', style: 'h4' },
              { text: 'Unid', style: 'h4' },
              { text: 'IVA', style: 'h4' },
              { text: 'Total', style: 'h4', alignment: RIGHT }
            ],
            ...printLines(invoice.lines),
            ['', '', '', '', '', ''],
            ['', '', '', '', 'Sub-Total', { text: printPrice(getNetTotal(invoice.lines)), alignment: RIGHT }],
            ['', '', '', '', 'IVA', { text: printPrice(getVATTotal(invoice.lines)), alignment: RIGHT }],
            ['', '', '', '', { text: 'TOTAL', style: 'h4' }, { text: printPrice(getGrossTotal(invoice.lines)), alignment: RIGHT }]
          ]
        },
        layout: 'noBorders'
      },
      '\n\n\n\n\n\n\n',
      { text: `IBAN ${invoice.company.name}`, style: 'h4' },
      `${invoice.company.iban}`,
      '\n',
      `El plazo de pago es de ${invoice.paymentDelay} días a contar desde la fecha de emisión de esta factura. `,
      '\n'
    ],
    footer: [
      {
        text: `${invoice.company.name} ${invoice.company.legalForm}, con CIF: ${invoice.company.vat} `,
        alignment: 'center',
        style: 'footer'
      },
      {
        text: `Inscrita en el ${invoice.company.regNumber}`,
        alignment: 'center',
        style: 'footer'
      }
    ],
    pageMargins: [40, 80, 40, 60],
    defaultStyle: {
      fontSize: 10,
      font: 'Ubuntu'
    },
    styles: {
      notice: {
        fontSize: 9
      },
      h4: {
        bold: true,
        lineHeight: 1.4
      },
      footer: {
        fontSize: 9,
        bold: true
      }
    }
  }
}

export { generateInvoiceDocumentEs }
