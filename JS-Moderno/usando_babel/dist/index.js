"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }
  var sum = nums.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  var totalN = nums.length;
  var result = sum / totalN;
  return result;
};
console.log("M\xE9dia Artim\xE9tica Simples: ".concat(mediaSimples(5, 5, 10, 10)));

/* ------------ */
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var num = _ref.num,
      weight = _ref.weight;
    return accum + num * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Aritm\xE9tica Ponderada: ".concat(mediaPonderada({
  num: 10,
  weight: 3
}, {
  num: 7,
  weight: 2
}, {
  num: 30,
  weight: 5
})));

/* ------------ */
var mediana = function mediana() {
  for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    nums[_key3] = arguments[_key3];
  }
  var orderedNums = [].concat(nums).sort(function (a, b) {
    return a - b;
  });
  var middleNums = Math.floor(orderedNums.length / 2);
  var firstMedian = orderedNums[middleNums - 1];
  var secondMedian = orderedNums[middleNums];
  if (orderedNums.length % 2 === 0) {
    return mediaSimples(firstMedian, secondMedian);
  }
  if (orderedNums.length % 2 === 1) {
    return orderedNums[middleNums];
  }
};
console.log("Mediana: ".concat(mediana(2, 5, 99, 4, 42, 7)));

/* ------------ */
var moda = function moda() {
  for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    nums[_key4] = arguments[_key4];
  }
  var quantities = nums.map(function (num) {
    return [num, nums.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));