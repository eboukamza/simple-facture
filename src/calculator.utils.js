const getVAT = (line) => line.price * line.quantity * line.vat;
const getVATTotal = (lines) => lines.reduce((sum, line) => sum + getVAT(line), 0);

const getNet = (line) => line.price * line.quantity;
const getNetTotal = (lines) => lines.reduce((sum, line) => sum + getNet(line), 0);

const getGross = (line) => getNet(line) + getVAT(line);
const getGrossTotal = (lines) => lines.reduce((sum, line) => sum + getGross(line), 0);

module.exports= {
  getVAT,
  getVATTotal,
  getNet,
  getNetTotal,
  getGross,
  getGrossTotal
};
