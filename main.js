function removeOddSum(array, key1, key2) {
  newArray = array.filter(element => ((element[key1] + element[key2]) % 2 == 0));
  return newArray;
}

module.exports = removeOddSum;
