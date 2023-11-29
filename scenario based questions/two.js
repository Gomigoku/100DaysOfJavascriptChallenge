console.log([] == ![]);

output:
true

reason:
first ![] will get converted into false which again will be converted into 0,
same way [] this converted into '' which again converted into 0. Hence the comparision 
becomes true.
