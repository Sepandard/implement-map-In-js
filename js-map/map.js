const map = (arr, func) => {
  if (Array.isArray(arr) && typeof func === 'function' ) {
    arr.forEach((item, index) => {
      arr[index] = func(item);
    });
    return arr;
  } else if(!Array.isArray(arr)) {
    throw new Error("Property is Not an Array");
  } else if(typeof func !== 'function') {
    throw new Error("Property for func is Not a function");
  }
};
const exampleArr = [1, 2, 3, 4, 5];
const mappedArr = map(exampleArr, (item) => item * item);

console.log(mappedArr); //[1, 4, 9, 16, 25]
