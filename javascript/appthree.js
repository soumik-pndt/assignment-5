document.getElementById('donate-btn-three').addEventListener('click',function(event){
    event.preventDefault();

    const addDonation = getInputFieldValueById('input-donate-three');
    const donationAmount = getTextFieldValueById('total-money-three');
    const accountBalance = getTextFieldValueById('account-balance');
    console.log(addDonation);

    if(addDonation > 0 && addDonation < accountBalance){
  

        // console.log(addDonation,balance);
        const newBalance = donationAmount + addDonation;
        document.getElementById('total-money-three').innerText = newBalance;
        const newAccountBalance = accountBalance - addDonation;
        document.getElementById('account-balance').innerText = newAccountBalance;

    }
    else {
        alert('failed to add money')
    }
})