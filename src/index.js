var arr = [1, 2, 3, 4, 5, 3, 2, 1];
// 1) Remove duplicate using filter
console.log(
  "Filter = ",
  arr.filter((value, index) => arr.indexOf(value) === index)
);

// 2) using set method
console.log("Set = ", [...new Set(arr)]);

// 3) Using includes
let unique = [];

arr.forEach((element) => {
  if (!unique.includes(element)) {
    unique.push(element);
  }
});
console.log("unique = ", unique);

// 4) Using reduce method

let dupReduce = arr.reduce(function (a, b) {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);
console.log("Reduce 1 = ", dupReduce);

// 5) Using reduce method 2

console.log(
  "Reduce 2 = ",
  arr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
);
