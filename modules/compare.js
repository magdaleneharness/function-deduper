function dedupe(inputArray) {
  let testHashMap = {};
  return inputArray.filter(item => {
    if (!testHashMap[item]) {
      testHashMap[item] = true;
    } else {
      return item;
    }
  });
}

module.exports = {
  dedupe: dedupe
};
