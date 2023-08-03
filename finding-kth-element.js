function kth(arr1,arr2,m,n,k){
  var sorted1 = Array(m+n).fill(0);
  var i=0,j=0,d=0;

  while(i<m && j<n){
    if(arr1[i] < arr2[j])
      sorted1[d++] = arr1[i++];
    else
      sorted1[d++] = arr2[j++];
  }
  while (i < m)
    sorted1[d++] = arr1[i++];
  while (j < n)
    sorted1[d++] = arr2[j++];
  return sorted1[k - 1];
}

var arr1 = [2,3,5,6,7,9];
var arr2 = [1,4,8,10];
var k=5;

console.log(kth(arr1,arr2,5,4,k));

output:
5
