let a = 1;
let b = 2;

// // // way 1 :
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// way 2:
a ^= b; // bit true + true -> false, false + false -> false
b ^= a;
a ^= b;
console.log(a);
console.log(b);