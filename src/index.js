
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let finalArray = [];

  if(matrix === undefined){
    return finalArray;
  }

  matrix.map((curr, index) => {
    if(index % 2 !== 0){
      curr.reverse();
    }

    finalArray.push(curr);
  })
  return finalArray.flat();
}
