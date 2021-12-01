function cakes(recipe, available) {
  var result = [];
  for (var key in recipe) {
    if (available[key] === undefined) {
      return 0;
    }
    console.log(key, available[key], recipe[key]);
    console.log(available[key] / recipe[key]);

    result.push(Math.floor(available[key] / recipe[key]));
  }
  console.log(result);

  return Math.min(...result);
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
