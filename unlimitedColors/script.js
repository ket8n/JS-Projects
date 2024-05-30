const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

// const bg = ['red', 'black', 'grey', 'green', 'pink', 'yellow']
// let ind = 0;

const randomColor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalID

const startBgChange = function (){

    if(!intervalID){
        intervalID = setInterval(() => {
            // ind = (ind+1)%bg.length
            // console.log(randomColor())
            document.body.style.backgroundColor = randomColor();
        }, 1000)
    }
}

const stopBgChange = function (){
    clearInterval(intervalID)
    intervalID = null
}

start.addEventListener('click', startBgChange)
stop.addEventListener('click', stopBgChange)