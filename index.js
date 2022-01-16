const TurnOn = document.getElementById ( "TurnOn" )
const TurnOff = document.getElementById ( "TurnOff")
const lamp = document.getElementById ( "lamp" )

function LampOn () {
    lamp.src = 'ligada.jpg'
}

function LampOff () {
    lamp.src = 'desligada.jpg'
}

function LampBreak () {
    lamp.src = 'quebrada.jpg'
}

TurnOff.addEventListener ('click', LampOff)
TurnOn.addEventListener ('click', LampOn)
lamp.addEventListener ('dblclick', LampBreak)