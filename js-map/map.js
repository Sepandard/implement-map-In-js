const map = (arr, func) => {
  if (Array.isArray(arr)) {
    arr.forEach((item, index) => {
      arr[index] = func(item);
    });
    return arr;
  } else {
    throw new Error("Property is Not an Array");
  }
};
const exampleArr = [1, 2, 3, 4, 5];
const mappedArr = map(exampleArr, (item) => item * item);

console.log(mappedArr);
