

let rows = 16 ;


const input = document.getElementById('tilesRowsNColumns') ;
const gridSize = document.getElementById('gridSize');


input.addEventListener('change', function(event){
    let rowsColumns=event.target.value;
    console.log(rowsColumns);
    gridSize.textContent = `${rowsColumns} X ${rowsColumns}` 
    rows =  rowsColumns;
    deleteGrid();
    createGrid();

})

// Buttons
const allButtons = document.querySelectorAll('.btn')

function deactivateButtons(){

    allButtons.forEach (btn => {
        btn.classList.remove('activeButton')

    })

}

function activateButton(clickedButton){
    deactivateButtons();
    clickedButton.classList.add('activeButton')

}

// individual buttons

const paint = document.getElementById('paint');
console.log(paint);

paint.addEventListener('click',()=>{
    activateButton(paint);
})

const erase = document.getElementById('erase');
console.log(erase);

erase.addEventListener('click', ()=>{
    activateButton(erase);
})

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click',()=>{
    activateButton(rainbow);
})

const deleteEverything = document.getElementById('deleteEverything');

deleteEverything.addEventListener("click", function(){
    activateButton(deleteEverything)
    const existingTiles = document.querySelectorAll('.tile');
    existingTiles.forEach(indvTile => {
        indvTile.style['background-color'] = 'white';
        });
        activateButton(paint)
})



// function to paint

function startPainting(clickedTile){
    if(paint.classList.contains('activeButton')){
        clickedTile.style['background-color']= currentColor;
    }
    else if(erase.classList.contains('activeButton')){
        clickedTile.style['background-color']='white';
    }
}

// }
function trigger(event) {
    startPainting(event.target)
}

// Function to create a tile
function createTile(){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.width = (container.clientWidth / rows)+'px';
    tile.style.height = (container.clientHeight / rows)+'px';
    tile.addEventListener("mousedown", trigger)
    return tile;
}


const container = document.querySelector('.container');
// container.appendChild(tile);




function allowPaint(){
    const existingTiles = document.querySelectorAll('.tile');
    existingTiles.forEach(indvTile => {
        indvTile.addEventListener("mousedown", function(){
            startPainting(indvTile);
        });
        
    });
}
    

 

function createRow(){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let nColumns = 0; nColumns <rows; nColumns++){
        createTile();
        row.appendChild(createTile())
    }
    return row;
}

function createGrid(){

    for(let nRows= 0; nRows < rows; nRows++){
        createRow();
        container.appendChild(createRow());
        
    }
}

createGrid();


function deleteGrid(){
    const existingTiles = document.querySelectorAll('.tile');
    existingTiles.forEach(indvTile => {
        indvTile.parentNode.removeChild(indvTile);

      })
}


// this is working, keeping out for test
// for (let nColumns = 0; nColumns < rows; nColumns++){
//     createTile();
//     container.appendChild(createTile())
// }



// Variables and function for painting
let isPainting = false;

let currentColor = 'black';

container.addEventListener("mousedown", function(){
    isPainting = true;
    console.log(isPainting)
})

container.addEventListener("mousemove",function(event){
    if (isPainting === true) {
        const tile = event.target;
        startPainting(tile)
    }
})

container.addEventListener("mouseup", function(){
    isPainting = false;
})



//change colors


const colors = document.getElementById('colors')

colors.addEventListener("change", function(event){
    let color = event.target.value;
    currentColor = color;
    console.log(currentColor)
})







//TO do

//First the click and change color , i ahve to work on that
// Then check how to put various tiles in the same row, i guess adding with flex, maybe having to add with  different names (for i range  and tile1,2,3 = tile (but blank))

// ok so i think it is better to do a for loop in which i create N amount of rows with N amount of elements inside. Since i amde the createTile its easier than previou idea

// range would be what the user asks the amount of tiles to be
// then I would also need to put at the begining of the function to reset all colors and actions with the div


// for the size and tiles i guess i coul do Height of grid(container) divided by number of tiles I will have per column 
// for width of tile based on the same logic it would be width of the container (the grid) and divide it by the number of tiles on each row.
