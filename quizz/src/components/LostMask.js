
function LostMask( idHide, classButtonColor) {
        
   
    document.getElementById(idHide).style.display = 'none'
    let lost = document.getElementsByClassName(classButtonColor)
    for (let i=0; i < lost.length; i++) {
        lost[i].style.backgroundColor = ''
        
    }
    
    
    
}


export default LostMask