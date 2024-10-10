const formatMoney = require('./index');

describe("Dollars and Cents", () => {
    test ("return the amount in dollars and cents ", () => {
        expect(formatMoney(39.99)).toBe("$39.99");
        expect(formatMoney(3)).toBe("$3.00");
        expect(formatMoney(2.7)).toBe("$2.70");
    })
})