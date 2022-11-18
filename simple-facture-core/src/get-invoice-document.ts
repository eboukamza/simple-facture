import { Invoice, Line } from './models'
import { getGrossTotal, getNetTotal, getVATTotal } from './calculator.utils'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
})

const RIGHT = 'right'

const NO_BREAK_SPACE = String.fromCodePoint(8239)

const printPrice = (price: number) => formatter.format(price).replace(NO_BREAK_SPACE, ' ')
const printPercent = (ratio: number) => ratio * 100 + ' %'

const printLines = (lines: Line[]) =>
  lines.map((line) => [
    line.detail,
    line.endDate,
    printPrice(line.price),
    line.quantity,
    printPercent(line.vat),
    { text: printPrice(line.quantity * line.price), alignment: RIGHT }
  ])

const getInvoiceDocument = (invoice: Invoice): TDocumentDefinitions => {
  return {
    content: [
      { text: `Facture nº ${invoice.number}`, style: 'h4' },
      { text: `Date: ${invoice.date}`, style: 'h4' },
      invoice.purchaseOrder ? { text: `Bon de commande: ${invoice.purchaseOrder}`, style: 'h4' } : '',
      '\n\n',
      { text: 'De', style: 'h4' },
      `${invoice.company.name}`,
      `${invoice.company.address.street}`,
      `${invoice.company.address.zipCode}, ${invoice.company.address.city}`,
      `${invoice.company.email}`,
      { text: 'Client', alignment: RIGHT, style: 'h4' },
      { text: invoice.customer.name, alignment: RIGHT },
      { text: invoice.customer.address.street, alignment: RIGHT },
      { text: `${invoice.customer.address.zipCode} ${invoice.customer.address.city}`, alignment: RIGHT },
      { text: `TVA : ${invoice.customer.vat}`, alignment: RIGHT },
      '\n\n\n',
      '\n\n\n',

      {
        table: {
          headerRows: 1,
          widths: ['40%', '*', 'auto', 'auto', '*', '*'],
          body: [
            [
              { text: 'Désignation', style: 'h4' },
              { text: 'Date de fin', style: 'h4' },
              { text: 'Prix u. HT', style: 'h4' },
              { text: 'Qté', style: 'h4' },
              { text: 'TVA', style: 'h4' },
              { text: 'Prix HT', style: 'h4', alignment: RIGHT }
            ],
            ...printLines(invoice.lines),
            ['', '', '', '', '', ''],
            ['', '', '', '', 'Total HT', { text: printPrice(getNetTotal(invoice.lines)), alignment: RIGHT }],
            ['', '', '', '', 'Total TVA', { text: printPrice(getVATTotal(invoice.lines)), alignment: RIGHT }],
            ['', '', '', '', { text: 'TOTAL TTC', style: 'h4' }, { text: printPrice(getGrossTotal(invoice.lines)), alignment: RIGHT }]
          ]
        },
        layout: 'noBorders'
      },
      '\n\n\n\n\n\n\n',
      { text: `IBAN ${invoice.company.name}`, style: 'h4' },
      `${invoice.company.iban}`,
      '\n',
      `La facture est payable sous ${invoice.paymentDelay} jours. `,
      '\n',
      'Escompte pour paiement anticipé : néant',
      '\n',
      {
        text:
          'Tout règlement effectué après expiration du délai donnera lieu, à titre de pénalité de retard, ' +
          "à l'application d'un intérêt égal à celui appliqué par la Banque Centrale Européenne à son opération de " +
          "refinancement la plus récente, majoré de 10 points de pourcentage, ainsi qu'à une indemnité forfaitaire pour" +
          " frais de recouvrement d'un montant de 40 €.",
        style: 'small'
      },
      "Les pénalités de retard sont exigibles sans qu'un rappel soit nécessaire."
    ],
    footer: [
      {
        text: `${invoice.company.name} - ${invoice.company.address.street} - ${invoice.company.address.zipCode} - France`,
        alignment: 'center',
        style: 'footer'
      },
      {
        text: `Siret : ${invoice.company.siret} - APE : ${invoice.company.ape} - TVA :  ${invoice.company.vat} - ${invoice.company.regNumber}`,
        alignment: 'center',
        style: 'footer'
      },
      { text: `${invoice.company.legalForm} au capital de ${invoice.company.founds} €`, alignment: 'center', style: 'footer' }
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

export { getInvoiceDocument }
