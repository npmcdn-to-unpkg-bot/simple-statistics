'use strict';

// # chunk
//
// Split an array into chunks of a specified size. This function
// has the same behavior as [PHP's array_chunk](http://php.net/manual/en/function.array-chunk.php)
// function, and thus will insert smaller-sized chunks at the end if
// the input size is not divisible by the chunk size.
//
// `sample` is expected to be an array, and `chunkSize` a number.
// The `sample` array can contain any kind of data.
function chunk(sample, chunkSize) {

    // a list of result chunks, as arrays in an array
    var output = [];

    // `chunkSize` must be zero or higher - otherwise the loop below,
    // in which we call `start += chunkSize`, will loop infinitely.
    // So, we'll detect and return null in that case to indicate
    // invalid input.
    if (chunkSize <= 0) {
        return null;
    }

    // `start` is the index at which `.slice` will start selecting
    // new array elements
    for (var start = 0; start < sample.length; start += chunkSize) {

        // for each chunk, slice that part of the array and add it
        // to the output. The `.slice` function does not change
        // the original array.
        output.push(sample.slice(start, start + chunkSize));
    }
    return output;
}

module.exports = chunk;
