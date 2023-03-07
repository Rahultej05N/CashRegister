const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const givenCash = document.querySelector("#given-cash");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const notes1 = document.querySelectorAll(".no-of-notes1");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
let input = document.querySelector("#given-cash");
let button = document.querySelector("#check-button");



button.disabled = true;

input.addEventListener("change", stateHandle);

function stateHandle() {
	if (document.querySelector(".input").value === "") {
		button.disabled = true;
	} else {
		button.disabled = false;
	}
}


checkButton.addEventListener("click",
    function validateBillAndGivenCash() {
        hideMessage();
        if (billAmount.value > 0) {
            if (givenCash.value >= billAmount.value) {
                const amountToBeReturnAmount = givenCash.value - billAmount.value;
                console.log(amountToBeReturnAmount)
                calculateNotes(amountToBeReturnAmount);
            } 
            
            else if(givenCash.value < billAmount.value){
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




