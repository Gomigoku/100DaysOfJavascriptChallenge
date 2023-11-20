function moveZeroesAtTheEnd(arr){
  let j=0;
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== 0){
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

let arr = [0,8,0,4,2,0,1,0];
arr = moveZeroesAtTheEnd(arr);
console.log(arr);
