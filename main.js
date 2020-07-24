
// --login button handelar---//


var loginbtn=document.getElementById("login");
loginbtn.addEventListener("click",function (){


const loginArea=document.getElementById("login-area").style.display="none"

 const transactionArea= document.getElementById("transaction-area");
 transactionArea.style.display="block";
})


// ----



var depositBtn=document.getElementById("add-deposit");
depositBtn.addEventListener("click",function(){

const depositAmount=document.getElementById("deposit-amount").value;

const depositNumber=parseFloat(depositAmount);

const currentDeposit=document.getElementById("current-deposit").innerText;

const currentDepositNumber=parseFloat(currentDeposit);


const total=depositNumber+currentDepositNumber;
document.getElementById("current-deposit").innerText=total;



const currentBalance=document.getElementById("current-balance").innerText;
const currentBalanceNumber=parseFloat(currentBalance);

var total1=depositNumber+currentBalanceNumber;
document.getElementById("current-balance").innerText=total1;


document.getElementById("deposit-amount").value="";




})


var witdrowBtn=document.getElementById("add-witdrow");
witdrowBtn.addEventListener("click",function(){

const witdrowAmount=document.getElementById("witdrow-amount").value;

const witdrowAmountNumber=parseFloat(witdrowAmount);




const currentWitdrow=document.getElementById("current-witdrow").innerText;
const currentWitdrowNumber=parseFloat(currentWitdrow);

total2=witdrowAmountNumber+currentWitdrowNumber;
document.getElementById("current-witdrow").innerText=total2;







const currentBalance=document.getElementById("current-balance").innerText;
const currentBalanceNumber=parseFloat(currentBalance);

total3=currentBalanceNumber-witdrowAmountNumber;
document.getElementById("current-balance").innerText=total3;


document.getElementById("witdrow-amount").value="";

})