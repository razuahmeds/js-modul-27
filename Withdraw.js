
// stop--1
document.getElementById('btn-Withdraw').addEventListener('click',function(){
    // stop--2
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString =withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // stop--3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal =parseFloat(previousWithdrawTotalString);
    // stop--4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // stop--5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElement = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElement);

    // stop--6
    const newBalanceTotal = previousBalanceTotal * newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // stop--7
    withdrawField.value ='';
})