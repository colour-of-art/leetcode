/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
   return num.split("").filter(x => x === "6" || x === "9" || x === "0" || x === "1" || x === "8").length === num.length
    && num.split("").map(x => x === "6" ? "9" : x === "9" ? "6" : x).reverse().join("") === num;
};
