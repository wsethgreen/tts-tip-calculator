

let submit = document.querySelector('.submit_btn');


// click function to take inputs and calculate grand total/tip amount

submit.addEventListener('click', (e) => {
    // prevent page refresh
    e.preventDefault();

    let billAmount = document.querySelector('.bill_input').value;

    let numGuests = document.querySelector('.num_guests').value;

    // Create variable for tip amount
    let tip_total = 0;

    if (document.getElementById('Bad').checked) {
        tip_total = billAmount * 0.15;
    } else if (document.getElementById('Mediocre').checked) {
        tip_total = billAmount * 0.2;
    } else {
        tip_total = billAmount * 0.25;
    }

    let grandTotal = parseFloat(billAmount) + parseFloat(tip_total);
    let perPerson = parseFloat(grandTotal) / parseFloat(numGuests);

    // Update inner HTML for Bill Amount, Tip Amount, Grand Total, and Total per Person
    document.querySelector('.bill_total').innerHTML = billAmount;
    document.querySelector('.tip_total').innerHTML = tip_total;
    document.querySelector('.grand_total').innerHTML = grandTotal;
    document.querySelector('.amount_per_person').innerHTML = perPerson;

})