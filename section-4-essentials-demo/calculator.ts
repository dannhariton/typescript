//data:
// initial amount
// annual contributions
// expected return
// duration

type Data = {
  initialAmount: number;
  annualContributions: number;
  expectedReturn: number;
  duration: number;
};

type Result = {
  year: string;
  totalAmount: number;
};

type CalcResult = Result[] | string;

const data: Data = {
  initialAmount: 10000,
  annualContributions: 100,
  expectedReturn: 15000,
  duration: 5,
};

function calcInvest(data: Data): CalcResult {
  const { initialAmount, annualContributions, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return "Initial should be > 0";
  }

  if (duration <= 0) return "Not enough years";

  if (expectedReturn < 0) return "Must be at least 0";

  const annualResult: Result[] = [];

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

function printResult(results: CalcResult) {
  //print data
  console.log(results);
}

const results = calcInvest(data);

printResult(results);
