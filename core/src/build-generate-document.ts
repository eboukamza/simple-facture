import { Lang } from './models/lang'
import { generateInvoiceDocumentFr } from './generate-invoice-document-fr'
import { generateInvoiceDocumentEs } from './generate-invoice-document-es'

const buildGenerateInvoiceDocument = (lang: Lang) => {
  switch (lang) {
    case 'fr-FR': return generateInvoiceDocumentFr
    case 'es-ES': return generateInvoiceDocumentEs
  }
}

export { buildGenerateInvoiceDocument }
