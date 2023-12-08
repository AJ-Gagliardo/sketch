


// Create a tile 
const tile = document.createElement('div');
tile.classList.add('tile');


// event listener to paint when clicked
tile.addEventListener("click", function(){
startPainting(this);
});

// function to paint

function startPainting(clickedTile){
clickedTile.style['background-color']= 'blue';
}

// }

// Function to create a tile
function createTile(){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener("click",function(){
        startPainting(this);
    })
    return tile;
}

// tool I am thinkin on using to see if the tiles are being created or not
let tileQuantity = document.querySelectorAll('.tile');


// testing to see if the tile adheres to the container
const container = document.querySelector('.container');
container.appendChild(tile);


// To see the created tiles

const existingTiles = document.querySelectorAll('.tile');


    existingTiles.forEach(indvTile => {
        indvTile.addEventListener("click", function(){
            startPainting(indvTile);
        });
        
    });

    



//testing







//(a for loop to create various tiles)
let rows = 6;

for (let nRows = 0; nRows < rows; nRows++){
    createTile();
}


// make tiles individual





//TO do

//First the click and change color , i ahve to work on that
// Then check how to put various tiles in the same row, i guess adding with flex, maybe having to add with  different names (for i range  and tile1,2,3 = tile (but blank))

// I am htinking on trying something like for loop where i put tile 1,2,3,4,5 etc using (i) ... i would be i++, ma range will be range.lenght 
// range would be what the user asks the amount of tiles to be
// then I would also need to put at the begining of the function to reset all colors and actions with the div
