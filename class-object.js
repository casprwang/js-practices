var sandwich = {
  title: "Reuben",
  price: 7,
  description: "Cleveland's favorite sandwich",
  ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
};  //this is a statement with ;

console.log(sandwich.title);
console.log(sandwich.price);



var vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "skiing",
  cost: 4000
};

function vacationMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`
}

console.log(vacationMarketing(vacation));
