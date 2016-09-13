function fizzBuzz(){
  var i = 10;
  while (i < 50) {
    if (i % 3 == 0) {
      if (i % 5 ==0) {
        console.log('FizzBuzz');
      } else {
        console.log('Fizz');
      }
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
    i++;
  }
}




function fizzBuzz2 () {
  for (i = 10; i < 100; i++) {
    if (i % 3 == 0) {
      if ( i % 5 == 0) {
        console.log("FizzBuzz");
      } else {
        console.log('Fizz');
    }
  } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz2();
