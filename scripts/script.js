

let submit = document.querySelector('.submit_btn');


// click function to take inputs and calculate grand total/tip amount

submit.addEventListener('click', (e) => {
    // prevent page refresh
    e.preventDefault();

    let billAmount = document.querySelector('.bill_input').value;

    let numGuests = document.querySelector('.num_guests').value;

    // Create variable for tip amount
    // let tip_total = 0;
   
    // Math for tip percentage with two decimal places
    if (document.getElementById('Bad').checked) {
        tip_total = billAmount * 0.15;
        tip_total = tip_total.toFixed(2);
    } else if (document.getElementById('Mediocre').checked) {
        tip_total = billAmount * 0.2;
        tip_total = tip_total.toFixed(2);
    } else {
        tip_total = billAmount * 0.25;
        tip_total = tip_total.toFixed(2);
    }

    // Math for final output. Includes decimals
    let grandTotal = parseFloat(billAmount) + parseFloat(tip_total);
    let perPerson = parseFloat(grandTotal) / parseFloat(numGuests);
   
    grandTotal = grandTotal.toFixed(2);
    perPerson = perPerson.toFixed(2);
   
   
    // Update inner HTML for Bill Amount, Tip Amount, Grand Total, and Total per Person
    document.querySelector('.bill_total').innerHTML = `$${billAmount}`;
    document.querySelector('.tip_total').innerHTML = `$${tip_total}`;
    document.querySelector('.grand_total').innerHTML = `$${grandTotal}`;
    document.querySelector('.amount_per_person').innerHTML = `$${perPerson}`;

})