

 document.getElementById("cashout-btn").addEventListener("click",function(event){

    event.preventDefault();
    const pin=document.getElementById("cashout-pin-number").value;
    const convertedPin=parseInt(pin);

    const amount=document.getElementById("cashout-amount-number").value;
    const convertedAmount = parseFloat(amount);

    const mainbalance=document.getElementById("main-balance").innerText;
   const convertedmainbalance = parseFloat(mainbalance);


    if(convertedPin===1234){
            const sum=convertedmainbalance-convertedAmount;
            document.getElementById("main-balance").innerText=sum;
    }

    else{
        alert("invalid Pin!");
    }

 })