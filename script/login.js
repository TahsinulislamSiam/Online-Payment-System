document.getElementById("login-btn").addEventListener("click",function(event){
event.preventDefault(); 
  const accountnumber = document.getElementById("account-number").value;
    const pinnumber = document.getElementById("pin-number").value;
    const convertpin=parseInt(pinnumber)
    if(accountnumber.length===11){
        if(convertpin===1234){
            window.location.href="./script/main.html";
        }
        else{
            alert("Not okay");
    
        }
    }
    else{
        alert("need valid account number");
    }
})