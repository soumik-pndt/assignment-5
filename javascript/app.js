const addDonation = getInputFieldValueById('input-donate');
const donationAmount = getTextFieldValueById('total-money');
const accountBalance = getTextFieldValueById('account-balance');
console.log(addDonation);



document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    const addDonation = getInputFieldValueById('input-donate');
    const donationAmount = getTextFieldValueById('total-money');
    const accountBalance = getTextFieldValueById('account-balance');
    console.log(addDonation);

    if(addDonation > 0 && addDonation < accountBalance){
  

        // console.log(addDonation,balance);
        const newBalance = donationAmount + addDonation;
        document.getElementById('total-money').innerText = newBalance;
        const newAccountBalance = accountBalance - addDonation;
        document.getElementById('account-balance').innerText = newAccountBalance;
        let headingOne = document.getElementById("heading-one").innerText;

        let historyBox =document.createElement("div");
        historyBox.className="bg-white p-3 my-3 rounded-lg border-2 w-[90%] mx-auto";
        historyBox.innerHTML=`
        <div>$${addDonation} ${headingOne}</div>
        <div>${new Date()} </div>
        `
        let historyList=document.getElementById("history-list");
        historyList.insertBefore(historyBox,historyList.firstChild);
    }
    else {
        alert('failed to add money')
    }
})

