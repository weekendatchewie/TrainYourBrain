

    function ButtonMask(idShow, idHide, idButtonColor) {
        
        document.getElementById(idShow).style.display = 'flex'
        document.getElementById(idHide).style.display = 'none'
        document.getElementById(idButtonColor).style.backgroundColor = '#ffc800'
        document.getElementById(idButtonColor).style.border = 'solid 2px #ffc800'
        
        
        
    }


export default ButtonMask
