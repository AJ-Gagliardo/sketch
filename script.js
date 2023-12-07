console.log('hello world');


const tile = document.createElement('div');
tile.classList.add('tile');

tile.addEventListener("click", function(){
startPainting();
});

function startPainting(){
tile.style['background-color']= 'blue';

}


const container = document.querySelector('.container');
container.appendChild(tile);




//TO do

//First the click and change color , i ahve to work on that
// Then check how to put various tiles in the same row, i guess adding with flex, maybe having to add with  different names (for i range  and tile1,2,3 = tile (but blank))

// I am htinking on trying something like for loop where i put tile 1,2,3,4,5 etc using (i) ... i would be i++, ma range will be range.lenght 
// range would be what the user asks the amount of tiles to be
// then I would also need to put at the begining of the function to reset all colors and actions with the div
