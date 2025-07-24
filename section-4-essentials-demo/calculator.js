"use strict";
//data:
// initial amount
// annual contributions
// expected return
// duration
const data = {
    initialAmount: 10000,
    annualContributions: 100,
    expectedReturn: 15000,
    duration: 5,
};
function calcInvest(data) {
    const { initialAmount, annualContributions, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial should be > 0";
    }
    if (duration <= 0)
        return "Not enough years";
    if (expectedReturn < 0)
        return "Must be at least 0";
    const annualResult = [];
    annualResult.push({
        year: "1",
        totalAmount: 20000,
    });
    annualResult.push({
        year: "2",
        totalAmount: 20000,
    });
    return annualResult;
} // => result[]
function printResult(results) {
    //print data
    console.log(results);
}
const results = calcInvest(data);
printResult(results);
