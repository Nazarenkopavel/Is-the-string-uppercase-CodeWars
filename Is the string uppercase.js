/*
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
*/
String.prototype.isUpperCase = function() {
  if (this.length == 0) {
    return "Must define the prototype isUpperCase";
  } else {
    return this.split("").every(el => (el === el.toUpperCase() ? true : false));
  }
};
console.log("Helsdsdfsdf".isUpperCase());

/*
  if (!String.prototype.isUpperCase) {
    String.prototype.isUpperCase = function () {
      return this.toUpperCase() === String(this);
    };
  }
  */
