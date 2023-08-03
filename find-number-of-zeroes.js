function firstzeroindex(arr, n){
		for (let i = 0; i < n; i++) {
			if (arr[i] == 0) {
				return i;
			}
		}
		return -1;
}

let arr = [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ];
let n = arr.length;
let x = firstzeroindex(arr, n);
if (x == -1) {
	console.log("Count of zero is 0");
}
else {
	console.log("count of zero is " + (n-x));
}


output:
count of zero is 6
