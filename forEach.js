var sum = 0;
var numbers = [12, 1, 314, 143];

function myFunction(item) {
  sum += item;
  console.log(sum);
}

numbers.forEach(myFunction)
