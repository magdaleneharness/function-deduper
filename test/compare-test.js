const assert = require("assert");
const compare = require("../modules/compare");

const inputArray = [
  "Longing",

  "Rusted",

  "Seventeen",

  "Daybreak",

  "Furnace",

  "Nine",

  "Benign",

  "Homecoming",

  "One",

  "Freight car",

  "Benign",

  "Homecoming",

  "One",

  "Freight car"
];

describe("Test to compare duplicate keywords", () => {
  it("catches duplicates in an array", () => {
    assert(compare.dedupe(inputArray).length === 4);
  });
});
