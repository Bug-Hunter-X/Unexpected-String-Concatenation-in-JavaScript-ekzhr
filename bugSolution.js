function myFunction(a, b) {
  // Explicit type conversion using Number()
  a = Number(a);
  b = Number(b);
  
  //Check if both a and b are numbers before the addition
  if(isNaN(a) || isNaN(b)){
    return 'Error: Invalid input. Please provide numbers only.';
  }
  return a + b; 
}

console.log(myFunction(5, '5')); // Output: 10
console.log(myFunction(5, 'a')); //Output: Error: Invalid input. Please provide numbers only.