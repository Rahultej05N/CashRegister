
const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const notes1=document.querySelectorAll(".no-of-notes1");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

const numberInput = document.getElementById('given-cash');
const submitButton = document.getElementById('check-button');

numberInput.addEventListener('input', function() {
  if (numberInput.value === '') {
    submitButton.disabled = true;
  } else {
    
    submitButton.disabled = false;
  }
});



checkButton.addEventListener("click",
    function validateBillAndGivenCash() {
        var billAmount = Number(document.querySelector("#bill-amount").value);
        var givenCash = Number(document.querySelector("#given-cash").value);
        
        hideMessage();
        if (billAmount > 0) {
            if (givenCash >= billAmount) {
                const amountToBeReturnAmount = givenCash - billAmount;
                const amount=billAmount;
                calculateNotes(amountToBeReturnAmount);
                calculate(amount);
            } 
            
            else if(givenCash < billAmount){
                showMsg("Given cash is less than the Bill Amount!")
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

function calculate(amount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc( amount/ availableNotes[i]);
        amount = amount % availableNotes[i];
        notes1[i].innerText = noOfNotes
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMsg(msg) {
    message.style.display = "block";
    message.innerText = msg
}




