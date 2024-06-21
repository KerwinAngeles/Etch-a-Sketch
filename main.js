const container = document.querySelector('#container');
const contentDiv = document.querySelector('#content-div');
let row = 16;
let column = 16;

function MakeGrid(row, column){
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
    
            const div = document.createElement('div');
            div.textContent = '';
            div.setAttribute('class', 'item')
            contentDiv.appendChild(div);
            container.appendChild(contentDiv);
        }
    }
}

MakeGrid(row, column)