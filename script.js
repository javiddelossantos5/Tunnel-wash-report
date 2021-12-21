function calculate() {
  const workerName = document.getElementById('workerName').value;
  const dateOfDay = document.getElementById('date').value;
  const creditCard = document.getElementById('credit').value;
  const washKey = document.getElementById('wash').value;
  const washPass = document.getElementById('washpass').value;
  const washPilot = document.getElementById('washpilot').value;
  const startingAmount = document.getElementById('starting-amount').value;
  const totalText = document.getElementById('total-text');
  const difference = document.getElementById('difference');

  const ones = document.getElementById('ones');
  const fives = document.getElementById('fives');
  const tens = document.getElementById('tens');
  const twenties = document.getElementById('twenties');
  const fifties = document.getElementById('fifties');
  const hundred = document.getElementById('hundred');

  const testWash11 = document.getElementById('testWash11').value * 11;
  const testWash14 = document.getElementById('testWash14').value * 14;
  const testWash16 = document.getElementById('testWash16').value * 16;

  const receiptFromTill11 =
    document.getElementById('receiptFromTill11').value * 11;
  const receiptFromTill14 =
    document.getElementById('receiptFromTill14').value * 14;
  const receiptFromTill16 =
    document.getElementById('receiptFromTill16').value * 16;

  const reWash11 = document.getElementById('reWash11').value * 11;
  const reWash14 = document.getElementById('reWash14').value * 14;
  const reWash16 = document.getElementById('reWash16').value * 16;

  const employee11 = document.getElementById('employee11').value * 11;
  const employee14 = document.getElementById('employee14').value * 14;
  const employee16 = document.getElementById('employee16').value * 16;

  const refund11 = document.getElementById('refund11').value * 11;
  const refund14 = document.getElementById('refund14').value * 14;
  const refund16 = document.getElementById('refund16').value * 16;

  testWashTotal = Number(testWash11) + Number(testWash14) + Number(testWash16);
  receiptFromTillTotal =
    Number(receiptFromTill11) +
    Number(receiptFromTill14) +
    Number(receiptFromTill16);
  reWashTotal = Number(reWash11) + Number(reWash14) + Number(reWash16);
  employeeTotal = Number(employee11) + Number(employee14) + Number(employee16);
  refundTotal = Number(refund11) + Number(refund14) + Number(refund16);

  noCharge =
    Number(testWashTotal) +
    Number(receiptFromTillTotal) +
    Number(reWashTotal) +
    Number(employeeTotal) +
    Number(refundTotal);

  const oneValue = ones.value * 1;
  const fivesValue = fives.value * 5;
  const tensValue = tens.value * 10;
  const twentiesValue = twenties.value * 20;
  const fiftiesValue = fifties.value * 50;
  const hundredValue = hundred.value * 100;

  const cashTotal =
    Number(oneValue) +
    Number(fivesValue) +
    Number(tensValue) +
    Number(twentiesValue) +
    Number(fiftiesValue) +
    Number(hundredValue);

  const totalOfTheDay =
    Number(cashTotal) +
    Number(creditCard) +
    Number(washKey) +
    Number(noCharge) +
    Number(washPass);

  const totalOfAddition = Number(totalOfTheDay) - Number(startingAmount);

  const total = Number(washPilot) - Number(totalOfAddition);
  console.log(total);

  totalText.innerHTML = Number(total);

  if (total === 0) {
    difference.innerHTML = `Good Job ${workerName} Perfect 0`;
  } else {
    difference.innerHTML = `${workerName} the amount is off ${total} dollars`;
  }
}
