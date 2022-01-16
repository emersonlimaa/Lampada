const TurnOn = document.getElementById ( "TurnOn" )
const TurnOff = document.getElementById ( "TurnOff")
const lamp = document.getElementById ( "lamp" )

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function LampOn () {
    if (!isLampBroken () ){
       lamp.src = 'ligada.jpg' 
    }
}

function LampOff () {
    if (!isLampBroken () ){
        lamp.src = 'desligada.jpg' 
     }
}

function LampBreak () {
    lamp.src = 'quebrada.jpg'
}

TurnOff.addEventListener ('click', LampOff)
TurnOn.addEventListener ('click', LampOn)
lamp.addEventListener ('mouseover', LampOn)
lamp.addEventListener ('mouseleave', LampOff)
lamp.addEventListener ('dblclick', LampBreak)