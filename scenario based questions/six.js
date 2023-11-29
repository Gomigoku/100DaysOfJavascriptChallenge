const arr = [1,2,3,4];

console.log(1 in arr);
console.log(2 in arr);
console.log(4 in arr);

output:
true
true
false

reason:
array indexs are used as keys in js
