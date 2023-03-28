const { taxCalc } = require("../app.js");

describe("LBTT Tax Calculator Testing", () => {
  describe("returns a number when given a number", () => {
    it("type of output is a number", () => {
      expect(typeof taxCalc(100)).toBe("number");
    });
    describe("returns a number under false inputs", () => {
      it("returns a number when given a string", () => {
        expect(typeof taxCalc("string")).toBe("number");
      });
    });
    describe("Works for first bracket - 0% of house price", () => {
      it("returns 0 when houseprice < £145,000", () => {
        expect(taxCalc(144999)).toBe(0);
      });
    });
    describe("Works for second bracket - 2% of house price.", () => {
      it("returns 4000 when houseprice 200000", () => {
        expect(taxCalc(200000)).toBe(4000);
      });
    });
    describe("Works for third bracket - 5% of house price.", () => {
      it("returns 15000 when houseprice 300000", () => {
        expect(taxCalc(300000)).toBe(15000);
      });
    });
    describe("Works for fourth bracket - 10% of house price.", () => {
      it("returns 50000 when houseprice 500000", () => {
        expect(taxCalc(500000)).toBe(50000);
      });
    });
    describe("Works for top fifth - 12% of house price.", () => {
      it("returns 120000 when houseprice 1000000", () => {
        expect(taxCalc(1000000)).toBe(120000);
      });
    });
  });
});
