/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water,
and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
One cell is a square with side length 1. The grid is rectangular, width and height
don't exceed 100. Determine the perimeter of the island.
*/

var islandPerimeter = function(grid) {
    const width = grid[0].length;
    const height = grid.length;
    console.log(width,height)
    let perimeter = 0;
    for(let i = 0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid[i][j] == 1){
                console.log(grid[i][j], i, j)
                if(!grid[i-1]||grid[i-1][j]==0){
                    console.log('1')
                    perimeter++;
                }
                if(!grid[i+1]||grid[i+1][j]==0){
                    perimeter++;
                    console.log('2')
                }
                if(!grid[i][j-1]||grid[i][j-1]==0){
                    perimeter++;
                    console.log('3')
                }
                if(!grid[i][j+1]||grid[i][j+1]==0){
                    perimeter++;
                    console.log('4')
                }
            }
        }
    }
    return perimeter
};
