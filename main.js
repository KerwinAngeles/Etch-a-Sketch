const container = document.querySelector('#container');
const contentDiv = document.querySelector('#content-div');
const btnRandom = document.querySelector('#random');
const btnReset = document.querySelector('#clear');
const btnEraser = document.querySelector('#eraser');
const btnColor = document.querySelector('#color');

let temple = 16;

btnRandom.addEventListener("click", () => {
    let contentRemove = contentDiv.querySelectorAll(".item")
    contentRemove.forEach(div => div.remove());
    MakeGrid(temple);
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
    for (let i = 0; i < temple; i++) {
        for (let j = 0; j < temple; j++) {
            const div = document.createElement('div');
            div.textContent = '';
            div.setAttribute('class', 'item');
            div.setAttribute('id', 'itemId');
            contentDiv.appendChild(div);
            container.appendChild(contentDiv);

            div.addEventListener('mouseover', () =>{
                ColorsRandom(div)
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
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let contentAddColor = contentDiv.querySelectorAll('.item');
    contentAddColor.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.background = "#" + randomColor;
        })
    })
}

function ColorsRandom(value){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    value.style.background = "#" + randomColor;
}

MakeGrid(temple);
