import { Line } from './line.model'

export interface Invoice {
  number: string
  purchaseOrder: string
  date: string
  company: {
    name: string
    address: {
      street: string
      zipCode: string
      city: string
    }
    email: string
    legalForm: string
    ape: string
    vat: string
    founds: string
    regNumber: string
    siret: string
    iban: string
  }
  customer: {
    name: string
    address: {
      street: string
      zipCode: string
      city: string
    }
    vat: string
  }
  lines: Line[]
  paymentDelay: number
}
