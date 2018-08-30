/*Utility functions used by other OSP functions.
 */

function getMinOfArray(numArray) {
    //helper functions to find the min and max of arrays
    return Math.min.apply(null, numArray);
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function arrayCoordinates(min, max, points) {
    var coordinates =[];
    var step = (max - min) /(points -1)
    var val = min;
    for (var i = 0; i < points; i++) {
        //pushes in each of the x values
        coordinates.push(val);
        val += step;
    }
    return coordinates;
}