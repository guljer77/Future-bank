document.getElementById("withdraw-id").addEventListener('click', function(){
    const withAmount = document.getElementById('withdraw-text').value;
    const newWithAmount = parseFloat(withAmount);
    document.getElementById('withdraw-text').value = '';
    if(isNaN(newWithAmount)){
        alert("valid Amount");
        return;
    }
    
    const oldWith = document.getElementById("with-textid");
    const withStr = oldWith.innerText;
    const oldWithAmount = parseFloat(withStr);
    

    // const totalWith = oldWithAmount + newWithAmount;
    // oldWith.innerText = totalWith;

    const totalId = document.getElementById("total-id");
    const totalStr = totalId.innerText;
    const oldTotalAmount = parseFloat(totalStr);
    if(newWithAmount>oldTotalAmount){
        alert("Isuficant Blance")
        return;
    }

    const totalWith = oldWithAmount + newWithAmount;
    oldWith.innerText = totalWith;

    const fixedAmount = oldTotalAmount - newWithAmount;
    totalId.innerText = fixedAmount;
})