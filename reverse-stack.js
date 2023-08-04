// You are given a stack St. You have  to reverse the stack using recursion.
let st = [1,2,3,4,5];
function insert_at_bottom(x){
  if(st.length == 0){
    st.push(x);
  }
  else{
    let a = st.pop();
    insert_at_bottom(x);
    st.push(a);
  }
}
function reverse(){
  if(st.length > 0){
    let x=st.pop();
    reverse();
    insert_at_bottom(x);
  }
}
reverse();
console.log(st);

output:
[ 5, 4, 3, 2, 1 ]
