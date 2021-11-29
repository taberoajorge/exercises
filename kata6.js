/*Description:

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// I made first this way

function moveZeros(arr) {
    
    count = arr.filter(i => i === 0);
    arr = arr.filter(i => i !== 0);

    for (let i = 0; i < count; i++) {
        arr.push(0);            
    }

    return arr
}


function moveZeros(arr) {
    return arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
}