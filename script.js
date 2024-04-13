const adviceBtn = document.querySelector(".advice-btn");
const adviceId = document.querySelector(".advice-id");
const adviceTxt = document.querySelector(".advice-text");


const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    const {slip} = data
    adviceId.innerHTML = "#"+slip.id
    adviceTxt.innerHTML = slip.advice

};
fetchData()
adviceBtn.addEventListener("click",fetchData);

