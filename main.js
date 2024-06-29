const container = document.querySelector('#container');
const contentDiv = document.querySelector('#content-div');
const btnRandom = document.querySelector('#random');
const btnReset = document.querySelector('#clear');
const btnEraser = document.querySelector('#eraser');
const btnColor = document.querySelector('#color');
const btnSize = document.querySelector('#size');
const div = document.querySelector("#itemId")

let temple = 16;

btnSize.addEventListener("click", () =>{
    let contentRemove = contentDiv.querySelectorAll(".item")
    contentRemove.forEach(div => div.remove());
    while (temple <= 100 || temple >= 1) {
        let size = prompt('Enter the size of your box');
        MakeGrid(size);
        return temple;
    }
});

btnRandom.addEventListener("click", () => {
    Random();
});

btnReset.addEventListener('click', () => {
    Reset();
});

btnEraser.addEventListener('click', () => {
    Eraser();
})

btnColor.addEventListener('click', () => {
    ColorBlack();
})

function MakeGrid(temple){
    let width;
    let height = 0.0;
    width = contentDiv.clientWidth / temple;
    height = contentDiv.clientHeight / temple
    for (let i = 0; i < temple; i++) {
        for (let j = 0; j < temple; j++) {
            const div = document.createElement('div');
            div.textContent = '';
            div.setAttribute('class', 'item');
            div.setAttribute('id', 'itemId');
            div.style.width = width + "px";
            div.style.height = height + "px";
            contentDiv.appendChild(div);
            container.appendChild(contentDiv);

            div.addEventListener('mouseover', () =>{
                ColorsRandom(div);
            })
        }
    }
}

function Reset(){
    let contentRemove = contentDiv.querySelectorAll(".item")
    contentRemove.forEach(div => div.style.background = "");
}

function Eraser(){
    let contentRemove = contentDiv.querySelectorAll(".item")
    return contentRemove.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.background = "";
        })
    });
}

function ColorBlack(){
    let contentRemove = contentDiv.querySelectorAll(".item")
    contentRemove.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.background = "black"
        })
    });
}

function Random(){
    let contentAddColor = contentDiv.querySelectorAll('.item');
    contentAddColor.forEach((div) => {
        div.addEventListener('mouseover', () => {
            ColorsRandom(div);
        })
    })
}

function ColorsRandom(value){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    value.style.background = "#" + randomColor;
}

MakeGrid(temple);
