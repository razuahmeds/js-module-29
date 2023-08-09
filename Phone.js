// function updatePhoneNumber(isIncreas){

// }

function updatePhonePrice(newPhoneNumber){
    
    const phonTotalprice = newPhoneNumber * 1219;
    const phonTotalElement =document.getElementById('phone-total');
    phonTotalElement.innerText = phonTotalprice;
};



function getTextElementValueById (elementId){
    
    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
};


function setTextElementValueById(elementId, value){
     const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


function subTotal (){
    
    const currentPhoneTotal = getTextElementValueById('phone-total');
    
    const currentCaseTotal = getTextElementValueById('case-total');

    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;


    setTextElementValueById('sub-total', currentSubTotal)
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;


    const textAmountString = (currentSubTotal * 0.10).toFixed(2);
    const textAmount = parseFloat(textAmountString);
    setTextElementValueById('tax-amount',textAmount);

    const finalAmount = currentSubTotal + textAmount;
    setTextElementValueById('final-total', finalAmount)
};



document.getElementById('btn-phone-plus').addEventListener('click',function(){
   
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberSting = phoneNumberField.value;
    const prviousPhoneNumver = parseInt(phoneNumberSting);


    const newPhoneNumber = prviousPhoneNumver + 1;
    phoneNumberField.value = newPhoneNumber;

    updatePhonePrice(newPhoneNumber);
    subTotal();




});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberSting = phoneNumberField.value;
    const prviousPhoneNumver = parseInt(phoneNumberSting);


    const newPhoneNumber = prviousPhoneNumver - 1;
    phoneNumberField.value = newPhoneNumber;
    updatePhonePrice(newPhoneNumber);
    subTotal();
});



