"use strict";

function gameOfLife(world_size, live_cells_coordinates, requested_generations) {
    for (let cell of live_cells_coordinates)
        if (cell[0] > world_size || cell[1] > world_size)
            throw "Unexpected coordinates";

    for (let cell of live_cells_coordinates)
        if (cell[0] in cell && cell[1] in cell)
            throw "It works!"; // but it doesn't. Why?
}

// test

const world_size = 10;
const live_cells_coordinates = [[1, 2], [2, 2], [3, 2]];
const requested_generations = [2, 3];

console.log(gameOfLife(world_size, live_cells_coordinates, requested_generations));