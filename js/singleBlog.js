let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});

const searchBtn = document.getElementById("search--btn");
const inputWrite = document.getElementById("text");
const inputName = document.getElementById("name");
const blogList = document.querySelector(".blog");
let blogNumber = document.querySelector(".blog__title");

let activeComments = 3;

let date = new Date();
let dateSeconds = new Date();

let cards = [
    {
        text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
        url: "../images/person-3.jpg",
        name: "Emilly Blunt",
        date: date.getHours(),
        dateSec: dateSeconds.getMinutes()
    },
    {
        text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
        url: "https://images.squarespace-cdn.com/content/v1/5a625406a9db094b68b99a98/1553193241866-ZNQFNT0UBUMJPAHOXLUP/2019-ford-mustang-roush-stage-3-burnout.jpg?format=1000w",
        name: "Josh Blunt",
        date: date.getHours(),
        dateSec: dateSeconds.getMinutes()
    },
    {
        text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser",
        url: "https://i.pinimg.com/originals/b6/1f/13/b61f13aaf17c384ee36d62762c6721f0.jpg",
        name: "Josh Blunt",
        date: date.getHours(),
        dateSec: dateSeconds.getMinutes()
    },
];

for(let card of cards) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="blog__box">
    <img class="blog__photo" src="${card.url}" alt="">
    <div class="blog__inform">
        <div class="blog__text"><p>${card.text}</p></div>
        <div class="blog__name">
            <div class="blog__people"><a href="">${card.name}</a></div>
            <div class="blog__date">December 26, 2021 at ${card.date}:${card.dateSec} am</div>
            <div class="blog__reply"><a href="#">Reply</a></div>
        </div>
    </div>
    </div>`
    blogList.appendChild(newDiv);
}

let activeText = () => {
    let newTodo = {
        text: inputWrite.value,
        name: inputName.value,
        url: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/01/2018-chevrolet-camaro-zl1-033.jpg",
        date: date.getHours(),
        dateSec: dateSeconds.getMinutes()
    }
    let newList = document.createElement("div");
    newList.innerHTML += `<div class="blog__box">
    <img class="blog__photo" src="${newTodo.url}" alt="">
    <div class="blog__inform">
        <div class="blog__text"><p>${newTodo.text}</p></div>
        <div class="blog__name">
            <div class="blog__people"><a href="">${newTodo.name}</a></div>
            <div class="blog__date">December 26, 2021 at ${newTodo.date}:${newTodo.dateSec} am</div>
            <div class="blog__reply"><a href="#">Reply</a></div>
        </div>
    </div>
    </div>`
    blogList.appendChild(newList);
    activeComments++;
    blogNumber.innerText = `0${activeComments} Comments`;
    if (activeComments >= 10) {
        blogNumber.innerText = `${activeComments} Comments`;
    }
}

searchBtn.addEventListener("click", activeText);