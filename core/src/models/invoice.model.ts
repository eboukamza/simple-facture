import { Line } from './line.model'
import { Lang } from './lang'
import { Customer } from './customer.model'

export interface Invoice {
  lang: Lang
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
    ape?: string
    vat: string
    founds: string
    regNumber: string
    siret?: string
    iban: string
  }
  customer: Customer
  lines: Line[]
  paymentDelay: number
}
