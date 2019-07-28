import { Product } from '../src/Product';
import * as taxLogic from '../src/Tax';

describe('Tax Logic', () => {
  // Assert greeter result
  it('Product price reported as $20.25 before tax and $24.30 after 20% tax.', () => {
    let p = new Product();
    p.Name = 'foo';
    p.Price = 20.25;
    p.UPS = '1234';

    expect(taxLogic.CalculatePriceAfterTax(p, 0.2)).toBe(24.3);
  });
  it('Product price reported as $20.25 before tax and $24.30 after 21% tax.', () => {
    let p = new Product();
    p.Name = 'foo';
    p.Price = 20.25;
    p.UPS = '1234';

    expect(taxLogic.CalculatePriceAfterTax(p, 0.21)).toBe(24.502499999999998);
  });

  it('Product price reported as $20.25 before tax and $24.30 after 25% tax.', () => {
    let p = new Product();
    p.Name = 'foo';
    p.Price = 20.25;
    p.UPS = '1234';

    expect(taxLogic.CalculatePriceAfterTax(p, 0.25)).toBe(24.502499999999998);
  });
});
