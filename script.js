function calculate() {
  const workerName = document.getElementById('workerName').value;
  const dateOfDay = document.getElementById('date').value;
//   const cashAmount = document.getElementById('cash').value;
  const creditCard = document.getElementById('credit').value;
  const washKey = document.getElementById('wash').value;
  const noChange = document.getElementById('change').value;
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


  console.log(workerName);
  console.log(dateOfDay);
//   console.log(cashAmount);
  console.log(creditCard);
  console.log(washKey);
  console.log(noChange);
  console.log(washPass);
  console.log(washPilot);
  console.log(startingAmount);


  const oneValue = ones.value * 1
  const fivesValue = fives.value * 5
  const tensValue = tens.value * 10
  const twentiesValue = twenties.value * 20
  const fiftiesValue = fifties.value * 50
  const hundredValue = hundred.value * 100



    const cashTotal = Number(oneValue) + Number(fivesValue) + Number(tensValue) + Number(twentiesValue) + Number(fiftiesValue) + Number(hundredValue);

    // console.log(oneValue);
    // console.log(fivesValue);
    // console.log(tensValue);
    // console.log(twentiesValue);
    // console.log(fiftiesValue);
    // console.log(hundredValue);



    console.log(cashTotal);

  const totalOfTheDay =
    Number(cashTotal) +
    Number(creditCard) +
    Number(washKey) +
    Number(noChange) +
    Number(washPass);

  const totalOfAddition = Number(totalOfTheDay) - Number(startingAmount);

  const total = Number(washPilot) - Number(totalOfAddition);
  console.log(total);

  //    location.href="./totalPage.html"

  totalText.innerHTML = Number(total);

  if (total === 0) {
    difference.innerHTML = `Good Job ${workerName} Perfect 0`;
  } else if (total < washPilot) {
    difference.innerHTML = `${workerName} the amount is off ${total} dollars`;
  } else if (total > washPilot) {
    difference.innerHTML = `${workerName} the amount is off ${total} dollars`;
  }
}
