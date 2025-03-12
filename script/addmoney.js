

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById("amount-number").value;
   const convertedAmount = parseFloat(amount);
   const pin=document.getElementById("pin-number").value;
   const convertedPin = parseInt(pin);
    const mainbalance=document.getElementById("main-balance").innerText;
   const convertedmainbalance = parseFloat(mainbalance);


        if(convertedPin===1234){
           const sum=convertedmainbalance+convertedAmount;
           document.getElementById("main-balance").innerText=sum;
        }

        else{
            console.log("invalid")
        }
})