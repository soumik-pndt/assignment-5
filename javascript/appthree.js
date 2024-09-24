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

        let headingOne = document.getElementById("heading-three").innerText;

        let historyBox =document.createElement("div");
        historyBox.className="bg-white p-3 my-3 rounded-lg border-2 w-[90%] mx-auto";
        historyBox.innerHTML=`
        <div>$${donationAmount} ${headingOne}</div>
        <div>${new Date()} </div>
        `
        let historyList=document.getElementById("history-list");
        historyList.insertBefore(historyBox,historyList.firstChild);

    }
    else {
        alert('failed to add money')
    }
})