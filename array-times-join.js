var cat = {
  meow: function(times) {
    console.log(Array(times).join("meow"));
  },
  purr: function(times) {
    console.log(Array(times).join("purr"));
  },
  snore: function(times) {
    console.log(Array(times).join("snore"));
  }
};

cat.meow(3);
cat.purr(4);
cat.snore(5);
