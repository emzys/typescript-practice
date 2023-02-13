"use strict";
function calcTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calcTax(400000));
let employee = {
    id: 1,
    name: "emilia",
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map