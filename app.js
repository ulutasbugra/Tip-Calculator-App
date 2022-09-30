const billInputValue = document.querySelector(".bill-amount")
const numberOfPerson = document.querySelector(".numberOfPeople")
const selectTip = document.querySelector(".select-tip")
const resetbtn = document.querySelector("#reset")



selectTip.addEventListener("click", sTip)
resetbtn.addEventListener("click",resetAll)
function sTip (e) {
  var tipAmount = document.querySelector("#tipAmount")
  var totalAmount = document.querySelector("#totalAmount")
  const item = e.target
  if (item.classList[1]== "5"){
     let tipAmountPerson = ((billInputValue.value * 5/100)/numberOfPerson.value).toFixed(2)
     let totalAmountPerson = ((billInputValue.value*5/100)+billInputValue.value/numberOfPerson.value).toFixed(2)
     tipAmount.innerHTML = `$${tipAmountPerson}`
     totalAmount.innerHTML = `$${totalAmountPerson}`
     } else if (item.classList[1]== "10"){
      let tip10 = billInputValue.value*10/100
      let tipAmountPerson= (tip10/numberOfPerson.value).toFixed(2)
      let totalAmountPerson= (tip10+billInputValue.value/numberOfPerson.value).toFixed(2)
      tipAmount.innerHTML = `$${tipAmountPerson}`
      totalAmount.innerHTML = `$${totalAmountPerson}`
       }else if (item.classList[1]== "15"){
        let tip15 = billInputValue.value*15/100
        let tipAmountPerson= (tip15/numberOfPerson.value).toFixed(2)
        let totalAmountPerson= (tip15+billInputValue.value/numberOfPerson.value).toFixed(2)
        tipAmount.innerHTML = `$${tipAmountPerson}`
        totalAmount.innerHTML = `$${totalAmountPerson}`
         }else if (item.classList[1]== "25"){
          let tip25 = billInputValue.value*25/100
          let tipAmountPerson= (tip25/numberOfPerson.value).toFixed(2)
          let totalAmountPerson= (tip25+billInputValue.value/numberOfPerson.value).toFixed(2)
          tipAmount.innerHTML = `$${tipAmountPerson}`
          totalAmount.innerHTML = `$${totalAmountPerson}`
           }else if (item.classList[1]== "50"){
            let tip50 = billInputValue.value*50/100
            let tipAmountPerson= (tip50/numberOfPerson.value).toFixed(2)
            let totalAmountPerson= (tip50+billInputValue.value/numberOfPerson.value).toFixed(2)
            tipAmount.innerHTML = `$${tipAmountPerson}`
            totalAmount.innerHTML = `$${totalAmountPerson}`
             }else if (item.classList[0]== "custom-input"){
              let customTip = document.querySelector(".custom-input") 
              let tipcustom = billInputValue.value*customTip.value/100
              let tipAmountPerson= (tipcustom/numberOfPerson.value).toFixed(2)
              let totalAmountPerson= (tipcustom+billInputValue.value/numberOfPerson.value).toFixed(2)
              tipAmount.innerHTML = `$${tipAmountPerson}`
              totalAmount.innerHTML = `$${totalAmountPerson}`
               }
}

function resetAll(){
  let customTip = document.querySelector(".custom-input") 
  customTip.value = "Custom"
  tipAmount.innerHTML = "$0.00"
  totalAmount.innerHTML = "$0.00"
  billInputValue.value= "0"
  numberOfPerson.value= "0"
}