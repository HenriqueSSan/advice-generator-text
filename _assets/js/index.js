"use strict";

const btnGetNewAdviceText = document.getElementById('--new-generator-text')

async function getApiText() {
  let response = await fetch('https://api.adviceslip.com/advice');
  return await response.json();
}

function setDataInHtml(adviceId ,adviceDescription){
  let setNewId = document.getElementById("--generation-id")
  let setNewDescription =  document.getElementById("--generation-description")

  setNewId.textContent =  adviceId
  setNewDescription.textContent = adviceDescription
}

btnGetNewAdviceText.addEventListener("click",()=>{
  getApiText().then(({ slip }) => setDataInHtml(slip.id,slip.advice))
})