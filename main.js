// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
	// your code
	//make use of the length of the array
	//use the index and length when getting the power
	//loop through the array
	//add each to a new array
	const newArr=[]
	const len=arr.length
	arr.forEach((x,i)=>{
	  const num=x* Math.pow(2,len-i-1)
	  newArr.push(num)
	})
	const dec= newArr.reduce((acc,c)=>acc+c,0)
	return dec
  };