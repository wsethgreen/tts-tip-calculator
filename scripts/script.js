// Creating variables for submit button and 'cash' sound
const submit = document.querySelector(".submit_btn");
const cashSound = new Audio("sounds/rc_tycoon_money.mp3");

// Sets two decimal places for bill amount when user clicks out of input
function setTwoNumberDecimal(el) {
  el.value = Math.trunc(el.value * Math.pow(10, 2)) / Math.pow(10, 2);
  //   el.value = parseFloat(el.value).toFixed(2);
}

// Sets no decimal places for number of guests when user clicks out of input
function setNoDecimal(el) {
  el.value = parseFloat(el.value).toFixed(0);
}

// Click function to take inputs and calculate grand total/tip amount
submit.addEventListener("click", (e) => {
  // Prevent page refresh
  e.preventDefault();
  // 'Cash sound plays
  cashSound.play();

  let billAmount = document.querySelector(".bill_input").value;
  let numGuests = document.querySelector(".num_guests").value;

  // Create variable for tip amount
  let tip_total = 0;

  // Alerts the user to missing input fields
  if (billAmount === "" && numGuests === "") {
    alert("Enter an amount for bill total and guests!");
  } else if (billAmount === "") {
    alert("Enter an amount for bill total!");
  } else if (numGuests === "") {
    alert("Enter an amount for number of guests!");
  }

  // Math for tip percentage with two decimal places
  else {
    if (document.getElementById("Bad").checked) {
      tip_total = billAmount * 0.15;
      tip_total = tip_total.toFixed(2);
    } else if (document.getElementById("Mediocre").checked) {
      tip_total = billAmount * 0.2;
      tip_total = tip_total.toFixed(2);
    } else {
      tip_total = billAmount * 0.25;
      tip_total = tip_total.toFixed(2);
    }
  }
  // Math for final output. Includes decimals
  let grandTotal = parseFloat(billAmount) + parseFloat(tip_total);
  let perPerson = parseFloat(grandTotal) / parseFloat(numGuests);

  grandTotal = grandTotal.toFixed(2);
  perPerson = perPerson.toFixed(2);

  // Update inner HTML for Bill Amount, Tip Amount, Grand Total, and Total per Person
  document.querySelector(".bill_total").innerHTML = `$${billAmount}`;
  document.querySelector(".tip_total").innerHTML = `$${tip_total}`;
  document.querySelector(".grand_total").innerHTML = `$${grandTotal}`;
  document.querySelector(".amount_per_person").innerHTML = `$${perPerson}`;
});
