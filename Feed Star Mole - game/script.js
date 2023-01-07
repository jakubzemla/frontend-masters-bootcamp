let hungryMoles = document.querySelectorAll(".hole img")
let worm = document.querySelector(".worm-box")
let feeded = false;
let wormStatus = 0;
let random = null;
let type = null;
let mood = "sad";

function init() {
    for(let mole of hungryMoles) {
        random = Math.random()
        if(random <= 0.65) {
            type = "mole"
            mole.src = `./images/${type}-hungry.png`
            showMole(mole, type, mood)
        } else {
            type = "king-mole"
            mole.src = `./images/${type}-hungry.png`
            showMole(mole, type, mood)
        }
    }
}
init()

function showMole(mole, type, mood) {
    setTimeout(() => {
        mole.style.display = "inline"
        mole.classList.add("feeding")
        mole.addEventListener("click", () => {
            mood = "fed";
            if(type === "mole") {
                wormStatus += 10;
            } else {
                wormStatus += 20;
            }
            worm.style.width = `${wormStatus}%`
            if (wormStatus >= 100) {
                finish()
            }
        })
        setTimeout(() => {
            mole.removeEventListener("click", () => {
                mood = "fed";
                console.log(type)
                wormStatus += 10;
                worm.style.width = `${wormStatus}%`
                if (wormStatus >= 100) {
                    finish()
                }
            })
            mole.classList.remove("feeding")
            result(mole, type, mood)
            }, 2000)
    }, Math.random() * (20000 - 2000) + 2000)     
}

function result(mole, type, mood) {
    mole.src=`./images/${type}-${mood}.png`
    mood = "sad";
    setTimeout(() => {
        mole.src=`./images/${type}-leaving.png`
        setTimeout(() => {
            mole.style.display="none"
        }, 500)
    }, 500)
}
setInterval(() => init(), 22000)

function finish() {
    let holes = document.querySelector(".holes")
    holes.style.display = "none"
    worm.style.display = "none"
    let winnerHole = document.querySelector("#winner")
    winnerHole.style.display = "block"
}










