"use strict";
function calcTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calcTax(400000));
//# sourceMappingURL=index.js.map