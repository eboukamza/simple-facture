import { Line } from './models'

const getVAT = (line: Line) => line.price * line.quantity * line.vat
const getVATTotal = (lines: Line[]) => lines.reduce((sum, line) => sum + getVAT(line), 0)

const getNet = (line: Line) => line.price * line.quantity
const getNetTotal = (lines: Line[]) => lines.reduce((sum, line) => sum + getNet(line), 0)

const getGross = (line: Line) => getNet(line) + getVAT(line)
const getGrossTotal = (lines: Line[]) => lines.reduce((sum, line) => sum + getGross(line), 0)

export { getVAT, getVATTotal, getNet, getNetTotal, getGross, getGrossTotal }
