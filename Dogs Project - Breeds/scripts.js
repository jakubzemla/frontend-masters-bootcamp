const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"
const select = document.querySelector(".breeds")
const spinner = document.querySelector(".spinner")
let breedImg = document.querySelector(".breed-img");

fetch(BREEDS_URL) 
    .then(response => response.json())
    .then(data => {
        const breedsArr = Object.keys(data.message)
        let chooseInfo = "Choose the breed:"
        breedsArr.unshift(chooseInfo)
        for(let breed of breedsArr) {
            let option = document.createElement("option")
            option.value = breed
            option.innerText = breed
            select.appendChild(option)
        }
    })  

select.addEventListener("change", event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    spinner.style.display = "block"
    breedImg.style.display = "none"
    getBreedPhoto(url)
});

function getBreedPhoto(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            breedImg.src = data.message;
            breedImg.style.display = "block"
            spinner.style.display= "none"
        })
}




