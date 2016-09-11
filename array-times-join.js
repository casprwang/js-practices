var cat = {
  meow: function(times) {
    console.log("meow".repeat(times));
  },
  purr: function(times) {
    console.log(Array(times+1).join("purr"));
  },
  snore: function(times) {
    console.log(Array(times+1).join("snore"));
  }
};

cat.meow(3);
cat.purr(4);
cat.snore(5);
