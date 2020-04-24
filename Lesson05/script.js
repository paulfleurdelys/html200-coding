// function bank for lesson 5 assignment
function bank() {
    let balance = 2000;
    let userCommand = "";
    while (userCommand != 'q') {
        userCommand = prompt("Welcome to Bells Pargo Bank \n D - deposit \n W - withdrawal \n B - balance \n Q to quit").toLowerCase();
            try {
                switch(userCommand) {
                    case 'q':
                        alert('Thanks for Visiting');
                        break;
                    case 'w':
                        let withdrawalAmount = parseFloat(prompt('Withdrawal Amount: ', 0));
                        if (isNaN(withdrawalAmount)) {
                            alert("Error: Non-Number Entered");
                        } else if (withdrawalAmount <= 0) {
                            alert("Error: Positive Withdrawal Amounts Only");
                        } else if (withdrawalAmount > balance){
                            alert("Error: Maximum Withdrawal is: $" + balance);
                        } else if (balance - withdrawalAmount <= 300) {
                            if (prompt("Warning: Low Balance\nConfirm Transaction? Y/N").toLowerCase() == 'y') {
                                balance = balance - withdrawalAmount;
                                alert('New Balance Amount: $' + balance);
                            } else {
                                alert('Transaction Cancelled');
                            };
                        } else {
                            balance = balance - withdrawalAmount;
                            alert('New Balance Amount: $' + balance);
                        }
                        break;
                    case 'd':
                        try {
                            let depositAmount = parseFloat(prompt('Deposit Amount: ', 0));
                            if (isNaN(depositAmount)) {
                                alert("Error: Non-Number Entered");
                            } else if (depositAmount <= 0) {
                                alert("Error: Positive Deposit Amounts Only");
                            } else if (depositAmount >= 50000){
                                alert("Error: Maximum Deposit $50,000")
                            }
                            else {
                                balance = balance + depositAmount;
                                alert('New Balance Amount: $' + balance);
                            }
                            break;
                        } catch (error) {
                            alert('Error Thrown', error);
                        }
                    case 'b':
                        alert('Your Balance: $' + balance);
                        break;
                }
            } catch (error) {
                console.log("Error", error);
            }
        }
 }