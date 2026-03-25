const form = document.querySelector('#myForm');
const errTxttitle = document.querySelector('#errTxtTitle');
const errTxtPriority = document.querySelector('#errTxtPriority');
const errTxtCategory = document.querySelector('#errTxtCategory');
const errTxtDate = document.querySelector('#errTxtDate');
const errTxtStatus = document.querySelector('#errTxtStatus');
const errTxtDes = document.querySelector('#errTxtDes');

form.addEventListener('submit', (e)=>{
    let flag = true; // ie form can be submitted
    const inpTitle = document.querySelector('#title');
    const inpCategory = document.querySelector('#category');
    const inpPriority = document.querySelector('#priority');
    const inpDate = document.querySelector('#date');
    const inpStatus = document.querySelector('#status');
    const inpDescription = document.querySelector('#pageDescription');
    
    console.log(inpTitle.value);
    console.log(inpCategory.value);
    console.log(inpPriority.value);
    console.log(inpDate.value);
    console.log(inpStatus.value);
    console.log(inpDescription.value);
    
    if(inpTitle.value.trim().length == 0){
        flag = false;
        errTxttitle.style.display = "inline";
    }else {
        errTxttitle.style.display = "none";
    }
    if(inpCategory.value.trim().length === 0){
        flag = false;
        errTxtCategory.style.display = "inline";
    }else {
        errTxttitle.style.display = "none";
    }
    if(inpPriority.value.trim().length === 0){
        flag = false;
        errTxtPriority.style.display = "inline";
    }else {
        errTxttitle.style.display = "none";
    }
    if(inpDate.value.trim().length === 0){
        flag = false;
        errTxtDate.style.display = "inline";
    }else {
        errTxttitle.style.display = "none";
    }
    if(inpStatus.value.trim().length === 0){
        flag = false;
        errTxtStatus.style.display = "inline";
    }else {
        errTxttitle.style.display = "none";
    }
    if(inpDescription.value.trim().length === 0){
        flag = false;
        errTxtDes.style.display = "inline";
    }else {
        errTxttitle.style.display = "none";
    }


    if(!flag){
        e.preventDefault(); 
    }


})