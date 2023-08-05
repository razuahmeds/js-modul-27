// stop--1

document.getElementById('btn-deposit').addEventListener('click',function(){

    // stop--2
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // stop--3

    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // stop--4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // stop--5
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);

    // stop--6
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // stop--7
    depositField.value = '';
})