import { Line } from './models'
import { Lang } from './models/lang'
import { Alignment } from 'pdfmake/interfaces'

const buildUtils = (lang: Lang) => {
  const formatter = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  const RIGHT: Alignment = 'right'

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

  return { printPrice, printLines, RIGHT }
}

export { buildUtils }
