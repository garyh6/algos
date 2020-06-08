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

    const createCoordinatesList = () => {
        const list = []

        for (let i=0; i<height; i++) {
            for (let j=0; j<width; j++) {
                list.push({y: i, x: j})
            }
        }

        return list
    }

    const shuffle = (arr) => {
        let end = arr.length
        let temp, idx

        while(end) {
            idx = Math.floor(Math.random() * end)
            end--

            temp = arr[idx]
            arr[idx] = arr[end]
            arr[end] = temp
        }

        return arr
    }

    const grid = createGrid(0)

    let coordinates = createCoordinatesList()
    coordinates = shuffle(coordinates)
    coordinates = coordinates.slice(0,mines)

    console.log('coordinates', coordinates)

    for(let i=0; i<coordinates.length; i++) {
        const {x, y} = coordinates[i]
        grid[y][x] = -1
    }

    console.log('grid', grid)

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

const grid = createMineSweeper(5, 5, 24)
console.log('grid', grid)