var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray (array, element) {
  var alteredArray = array.unshift(element);
  return array;
};

function destructivelyAddElementToEndOfArray (array, element) {
  var alteredArray = array.push(element);
  return array;
};
