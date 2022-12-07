let currencyNumber = document.querySelector(".currency__number");
let form = document.querySelector(".currency__form");
let fromUsd = document.querySelector(".from__usd");
let fromEu = document.querySelector(".from__eu");
let fromUzs = document.querySelector(".from__uzs");
let fromRub = document.querySelector(".from__rub");
let toUsd = document.querySelector(".to__usd");
let toEu = document.querySelector(".to__eu");
let toUzs = document.querySelector(".to__uzs");
let toRub = document.querySelector(".to__rub");
let btn = document.querySelector(".btn");
let fromSelect = document.getElementById("from__select");
let toSelect = document.getElementById("to__select");
let exchange = document.querySelector(".exchange__title")



form.addEventListener("submit" , (e) => {
  e.preventDefault();
  // console.log(currencyNumber.value);
  // console.log(fromSelect.value);

  // DOLLAR
  if (fromSelect.value == 'usd' && toSelect.value == 'uzs') {
    exchange.textContent = `Exchange Rate: USD ${currencyNumber.value} = ${currencyNumber.value * 11258} UZS`
    console.log(currencyNumber.value * 11258);
  } else if (fromSelect.value == 'usd' && toSelect.value == 'eu') {
    exchange.textContent = `Exchange Rate: USD ${currencyNumber.value} = ${currencyNumber.value * 0.95} EURO`
    console.log(currencyNumber.value * 0.95);
  } else if (fromSelect.value == 'usd' && toSelect.value == 'rub') {
    exchange.textContent = `Exchange Rate: USD ${currencyNumber.value} = ${currencyNumber.value * 62.55} RUBLES`
    console.log(currencyNumber.value * 62.55);
  } else if (fromSelect.value == 'usd' && toSelect.value == 'usd') {
    alert("Two identical currencies cannot be converted 🚫")
  } else if (currencyNumber.value == 0) {
    alert("❗❗ Enter a number greater than 0 ❗❗")
  }

  // SO'M
  if (fromSelect.value == 'uzs' && toSelect.value == 'usd') {
    exchange.textContent = `Exchange Rate: UZS ${currencyNumber.value} = ${currencyNumber.value / 11258} USD`
    console.log(currencyNumber.value / 11258);
  } else if (fromSelect.value == 'uzs' && toSelect.value == 'eu') {
    exchange.textContent = `Exchange Rate: UZS ${currencyNumber.value} = ${currencyNumber.value / 11848} EURO`
    console.log(currencyNumber.value / 11848);
  } else if (fromSelect.value == 'uzs' && toSelect.value == 'rub') {
    exchange.textContent = `Exchange Rate: UZS ${currencyNumber.value} = ${currencyNumber.value / 181.59} RUB`
    console.log(currencyNumber.value / 181.59 );
  } else if (fromSelect.value == 'uzs' && toSelect.value == 'uzs') {
    alert("Two identical currencies cannot be converted 🚫")
  } else if (currencyNumber.value == 0) {
    alert("❗❗ Enter a number greater than 0 ❗❗")
  }

  // EURO
  if (fromSelect.value == 'eu' && toSelect.value == 'usd') {
    exchange.textContent = `Exchange Rate: EURO ${currencyNumber.value} = ${currencyNumber.value * 1.05} USD`
    console.log(currencyNumber.value * 1.05);
  } else if (fromSelect.value == 'eu' && toSelect.value == 'uzs') {
    exchange.textContent = `Exchange Rate: EURO ${currencyNumber.value} = ${currencyNumber.value * 11842} UZS`
    console.log(currencyNumber.value * 11842);
  } else if (fromSelect.value == 'eu' && toSelect.value == 'rub') {
    exchange.textContent = `Exchange Rate: EURO ${currencyNumber.value} = ${currencyNumber.value * 65.20} RUB`
    console.log(currencyNumber.value * 65.20);
  } else if (fromSelect.value == 'eu' && toSelect.value == 'eu') {
    alert("Two identical currencies cannot be converted 🚫")
  } else if (currencyNumber.value == 0) {
    alert("❗❗ Enter a number greater than 0 ❗❗")
  }

  // RUBLES
  if (fromSelect.value == 'rub' && toSelect.value == 'usd') {
    exchange.textContent = `Exchange Rate: RUB ${currencyNumber.value} = ${currencyNumber.value * 0.016} USD`
    console.log(currencyNumber.value * 0.016);
  } else if (fromSelect.value == 'rub' && toSelect.value == 'uzs') {
    exchange.textContent = `Exchange Rate: RUB ${currencyNumber.value} = ${currencyNumber.value * 181.59} UZS`
    console.log(currencyNumber.value * 181.59);
  } else if (fromSelect.value == 'rub' && toSelect.value == 'eu') {
    exchange.textContent = `Exchange Rate: RUB ${currencyNumber.value} = ${currencyNumber.value * 0.015} EURO`
    console.log(currencyNumber.value * 0.015);
  } else if (fromSelect.value == 'rub' && toSelect.value == 'rub') {
    alert("Two identical currencies cannot be converted 🚫")
  } else if (currencyNumber.value == 0) {
    alert("❗❗ Enter a number greater than 0 ❗❗")
  }
})





// fromSelect.addEventListener("click", (e) => {
//   e.preventDefault();
//   let fromSelectvalue = fromSelect.value;
//   if (fromSelectvalue === "usd") {
//     fromUsd.style.display = "none";
//     fromEu.style.display = "block";
//     fromUzs.style.display = "block";
//     fromRub.style.display = "block";
//   } else if (fromSelectvalue === "rub") {
//     fromRub.style.display = "none";
//     fromUsd.style.display = "block";
//     fromUzs.style.display = "block";
//     fromEu.style.display = "block";
//   } else if (fromSelectvalue === "uzs") {
//     fromUzs.style.display = "none";
//     fromUsd.style.display = "block";
//     fromEu.style.display = "block";
//     fromRub.style.display = "block";
//   } else if (fromSelectvalue === "eu") {
//     fromEu.style.display = "none";
//     fromUsd.style.display = "block";
//     fromUzs.style.display = "block";
//     fromRub.style.display = "block";
//   } else {
//     fromUsd.style.display = "block";
//     fromUzs.style.display = "block";
//     fromEu.style.display = "block";
//     fromRub.style.display = "block";
//   }
// });
