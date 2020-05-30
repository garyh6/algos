// Generate minesweeper game  nxm with k mines
// -1 is bomb

const createMineSweeper = (width, height, mines) => {

    if(!height || ! width) return []
    if(mines >= width*height) {
        return createGrid(Infinity)
    }

    const createGrid = (val) => {
        const grid = []
        for(let i=0; i<height; i++) {
            grid.push(new Array(width).fill(val))
        }
        return grid
    }

    const getBombCoordinates = () => {
        x = Math.floor(Math.random() * width)
        y = Math.floor(Math.random() * height)
        return {x, y}
    }

    const grid = createGrid(0)

    // this is a problem, would be better to y*n + x = num
    // from a list of num, shuffle and slice first z numbers
    let count = 0
    while (count < mines) {
        let {x, y} = getBombCoordinates()
        if(grid[y][x] === 0) {
            grid[y][x] = -1
            count++
        }
    }

    for(let i=0; i<height; i++) {
        for(let j=0; j<width; j++) {
            if(grid[i][j] === -1) continue
            //N i-1
            if( i-1>=0 && 
                grid[i-1][j] === -1) grid[i][j]++
            //NE i-1 j+1
            if( i-1>=0 && 
                j+1<width && 
                grid[i-1][j+1] === -1) grid[i][j]++
            //E j+1
            if( j+1<width && 
                grid[i][j+1] === -1) grid[i][j]++
            //SE i+1 j+1
            if( i+1<height &&
                j+1<width && 
                grid[i+1][j+1] === -1) grid[i][j]++
            //S i+1
            if( i+1<height && 
                grid[i+1][j] === -1) grid[i][j]++
            //SW i+1 j-1
            if( i+1<height && 
                j-1>=0 && 
                grid[i+1][j-1] === -1) grid[i][j]++
            //W j-1
            if( j-1>=0 && 
                grid[i][j-1] === -1) grid[i][j]++
            //NW i-1 j-1
            if( i-1>=0 && 
                j-1>=0 &&
                grid[i-1][j-1] === -1) grid[i][j]++
        }
    }

    return grid
}

const grid = createMineSweeper(3, 3, 4)
console.log('grid', grid)