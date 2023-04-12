let fname = document.querySelector("[name=fname]");
let emailfi = document.querySelector("[name=fEmail]");
let phone = document.querySelector("[name=fphone]");
let msgField = document.querySelector("[name=fMsg]");
let optionField = document.querySelector("[name=option]");

let errorMsg = document.querySelector(".error-msg");
let errorMsg2 = document.querySelector(".error-msg2");
let errorMsg3 = document.querySelector(".error-msg3");
let errorMsg4 = document.querySelector(".error-msg4");
let errorMsg5 = document.querySelector(".error-msg5")

document.forms[0].onsubmit = function(e){

    let errorfname = [];
    let errorEmail = [];
    let errorPhone = [];
    let errorMsgfield = [];
    let errorOptionField = [];


    
    if(fname.value == ""){
        errorfname.push("this Field can't be empty");
        addErrorsToPage1(errorfname);
        fname.classList.add("err");
        }
    if(emailfi.value == ""){
        errorEmail.push("this Field can't be empty");
        addErrorsToPage2(errorEmail);
        emailfi.classList.add("err");
    }
    if(phone.value == ""){
        errorPhone.push("this Field can't be empty");
        addErrorsToPage3(errorPhone);
        phone.classList.add("err");
    }
    if(msgField.value == ""){
        errorMsgfield.push("this Field can't be empty");
        addErrorsToPage5(errorMsgfield);
        msgField.classList.add("err");
    }
    if(optionField.value == "hello"){
        console.log("hello")
    }
    
    e.preventDefault();
}

function addErrorsToPage1(errorfname){
    errorMsg.innerHTML = "";
    errorfname.forEach(element => {
        errorMsg.innerHTML = element;
    });
}
function addErrorsToPage2(errorEmail){
    errorMsg2.innerHTML = "";
    errorEmail.forEach(element => {
        errorMsg2.innerHTML = element;
    });
}
function addErrorsToPage3(errorPhone){
    errorMsg3.innerHTML = "";
    errorPhone.forEach(element => {
        errorMsg3.innerHTML = element;
    });
}
function addErrorsToPage4(errorOptionField){
    errorMsg4.innerHTML = "";
    errorOptionField.forEach(element => {
        errorMsg4.innerHTML = element;
    });
}
function addErrorsToPage5(errorMsgfield){
    errorMsg5.innerHTML = "";
    errorMsgfield.forEach(element => {
        errorMsg5.innerHTML = element;
    });
}

