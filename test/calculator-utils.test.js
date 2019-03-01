const {getNetTotal, getGrossTotal, getVATTotal} = require('../src/calculator.utils');

describe('calculator utils test', () => {

  test('calculate net total', () => {
    let lines = [
      {price: 100, quantity: 10}, // 1000
      {price: 200, quantity: 5} // 1000
    ];

    expect(getNetTotal(lines)).toBe(2000)
  });

  test('calculate gross total', () => {
    let lines = [
      {price: 100, vat: 0.1, quantity: 10}, // 1100
      {price: 200, vat: 0.2, quantity: 5} // 1200
    ];

    expect(getGrossTotal(lines)).toBe(2300)
  });

  test('calculate VAT total', () => {
    let lines = [
      {price: 100, vat: 0.1, quantity: 10}, // 100
      {price: 200, vat: 0.2, quantity: 5} // 200
    ];

    expect(getVATTotal(lines)).toBe(300)
  });

  test('all together: net + vat = total', () => {
    let lines = [
      {price: 100, vat: 0.1, quantity: 10},
      {price: 200, vat: 0.2, quantity: 5}
    ];

    expect(getNetTotal(lines) + getVATTotal(lines)).toBe(getGrossTotal(lines))
  })
});
