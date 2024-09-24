//banner-section  donation and history button color changing part here //

const historyTab = document.getElementById('history-btn')
const donationTab = document.getElementById('donation-btn')
historyTab.addEventListener('click',function(){
    historyTab.classList.add(
        "bg-[#B4F461]"
    )
    historyTab.classList.add("bg-[#B4F461]")
    donationTab.classList.remove("bg-[#B4F461]")

    document.getElementById("form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

})

donationTab.addEventListener('click',function(){
    donationTab.classList.add(
        "bg-[#B4F461]"
    )
    donationTab.classList.add("bg-[#B4F461]")
    historyTab.classList.remove("bg-[#B4F461]")

    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("form").classList.remove("hidden");
})

// blog button page 
let blogbtn=document.getElementById("blog-btn");
blogbtn.addEventListener("click",function(){
    window.location.href="./home.html"
})
