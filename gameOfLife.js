"use strict";

function gameOfLife(world_size, live_cells_coordinates, requested_generations) {
    for (let point of live_cells_coordinates)
        if (point[0] > world_size || point[1] > world_size)
            throw "Unexpected coordinates"

}

// test

const world_size = 10;
const live_cells_coordinates = [[1, 2], [2, 2], [3, 4]];
const requested_generations = [2, 3];

console.log(gameOfLife(world_size, live_cells_coordinates, requested_generations));