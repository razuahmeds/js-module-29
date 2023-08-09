function updateCaseNumber (isIncrease){
const caseNumberField = document.getElementById('case-number-field');
    const caseNumberSting = caseNumberField.value;
    const prrviousCaseNumver = parseInt(caseNumberSting);
    if(isIncrease){
        newCaseNumber = prrviousCaseNumver + 1;
    }else{
        newCaseNumber = prrviousCaseNumver - 1;
    }
 
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateTotalNumber(){
 
    const caseTotalPrice =newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;
};



function getTextElementValueById (elementId){
    
    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
};

function subTotal (){
    
    const currentPhoneTotal = getTextElementValueById('phone-total');
    
    const currentCaseTotal = getTextElementValueById('case-total');

    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
};


document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(true)
   updateTotalNumber();

   subTotal();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false)

    updateTotalNumber();
    subTotal();
})

