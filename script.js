const count = document.querySelector('.count')
const changeBy = document.querySelector('.changeBy')

function minusbtn() {
       const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
};

function plusbtn() {
     const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
};

function resetbtn() {
      count.innerText = 0
};