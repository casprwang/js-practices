var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions: function() {
    this.actions.forEach(function(action){
        var str = this.first = "likes to" + action;
    })
  }
}
