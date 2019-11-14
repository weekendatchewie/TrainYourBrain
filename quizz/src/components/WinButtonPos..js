function RandomButton(max) {
  return Math.floor(Math.random()*Math.floor(max)+1)
}

let orderButton = RandomButton(2)

function WinButtonPos() {
    let res = document.getElementById('winButton')
    res.style.order = orderButton  
}


export default WinButtonPos