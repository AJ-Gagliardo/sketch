


// Create a tile 
// will probably delete this soon, this was just for testing purpose
// const tile = document.createElement('div');
// tile.classList.add('tile');


// event listener to paint when clicked
// dont need this part of the code any more apparently

// tile.addEventListener("click", function(){
// startPainting(this);
// });

// function to paint

function startPainting(clickedTile){
clickedTile.style['background-color']= currentColor;
}

// }

// Function to create a tile
function createTile(){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener("mousedown",function(event){
        startPainting(event.target);
    })
    return tile;
}

// tool I am thinkin on using to see if the tiles are being created or not
let tileQuantity = document.querySelectorAll('.tile');


// testing to see if the tile adheres to the container
// probably will deleate this
const container = document.querySelector('.container');
// container.appendChild(tile);


// To see the created tiles

const existingTiles = document.querySelectorAll('.tile');


    existingTiles.forEach(indvTile => {
        indvTile.addEventListener("mousedown", function(){
            startPainting(indvTile);
        });
        
    });

    

    // later on for size of the tiles I probably have to do  NumOfTiles / SizeOfGrid 


//testing



// const row = document.createElement('div');




//(a for loop to create various tiles)
let rows = 6;


// row.classList.add('row');

function createRow(){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let nColumns = 0; nColumns <rows; nColumns++){
        createTile();
        row.appendChild(createTile())
    }
    return row;
}

for(let nRows= 0; nRows < rows; nRows++){
    createRow();
    container.appendChild(createRow());

}


// this is working, keeping out for test
// for (let nColumns = 0; nColumns < rows; nColumns++){
//     createTile();
//     container.appendChild(createTile())
// }



// Variables and function for painting
let isPainting = false;

let currentColor = 'blue'

container.addEventListener("mousedown", function(){
    isPainting = true;
    console.log(isPainting)
})




//TO do

//First the click and change color , i ahve to work on that
// Then check how to put various tiles in the same row, i guess adding with flex, maybe having to add with  different names (for i range  and tile1,2,3 = tile (but blank))

// ok so i think it is better to do a for loop in which i create N amount of rows with N amount of elements inside. Since i amde the createTile its easier than previou idea

// range would be what the user asks the amount of tiles to be
// then I would also need to put at the begining of the function to reset all colors and actions with the div
