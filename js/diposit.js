document.getElementById('diposit-btn').addEventListener('click', function(){
    const newAmount = document.getElementById("diposit-text").value;
    const amountNew = parseFloat(newAmount);
    document.getElementById("diposit-text").value = '';
    if(isNaN(amountNew)){
        alert("not valid amount");
        return;
    }
    
    const dipositAmount = document.getElementById("diposit-id");
    const dipositString = dipositAmount.innerText;
    const oldAmount = parseFloat(dipositString);

    const totalAmount = oldAmount + amountNew;
    dipositAmount.innerText = totalAmount;

    const totalnew = document.getElementById("total-id");
    const totalStr = totalnew.innerText;
    const totalOldAmount = parseFloat(totalStr);

    const totalValueOfAmount = totalOldAmount + amountNew;

    totalnew.innerText = totalValueOfAmount;
})