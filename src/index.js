
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length  == 0) { return [];}

  var newArr = [];
	for (let i = 0; i < matrix.length; i++) {
		let rowArr = matrix[i];
		
		if (i % 2 != 0) {
			rowArr.reverse();
    } 
    
		newArr = newArr.concat(rowArr);
  }
  return newArr;
}
