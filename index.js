const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const givenCash = document.querySelector("#given-cash");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",
    function validateBillAndGivenCash() {
        hideMessage();
        if (billAmount.value > 0) {
            if (givenCash.value >= billAmount.value) {
                const amountToBeReturnAmount = givenCash.value - billAmount.value;
                console.log(amountToBeReturnAmount)
                calculateNotes(amountToBeReturnAmount);
            } else {
                showMsg("Check the bill Sir!")
            }
        } else {
            showMsg("Enter Validate Bill Amount")
        }
    })


function calculateNotes(amountToBeReturnAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(amountToBeReturnAmount / availableNotes[i]);
        amountToBeReturnAmount = amountToBeReturnAmount % availableNotes[i];
        notes[i].innerText = noOfNotes
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMsg(msg) {
    message.style.display = "block";
    message.innerText = msg
}