var tinycolor = require("tinycolor2");
var moment = require("moment");
var color = tinycolor("red");
var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

console.log("Hello JavaScript");
console.log(datetime);
console.log(bob);