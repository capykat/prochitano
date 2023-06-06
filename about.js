const btnL = document.querySelector('.bLeftJS')
const btnR = document.querySelector('.bRightJS')
const picLine = document.querySelector('.pLineJS')
let offset = 0

btnR.addEventListener('click', sRight)

btnR.addEventListener('click', function(){
    // clearInterval(timerid)
})

btnL.addEventListener('click', sLeft)
btnL.addEventListener('click', function(){
    // clearInterval(timerid)
})

// let timerid = setInterval(sLeft, 2000)

function sLeft(){
    offset -= 470
    if(offset <= -470*5){
        offset=0
    }
    console.log(offset)
    picLine.style.left= offset +'px'
}

function sRight(){
    offset += 470
    if(offset >= 1){
        offset=-470*5
    }
    console.log(offset)
    picLine.style.left= offset +'px'
}