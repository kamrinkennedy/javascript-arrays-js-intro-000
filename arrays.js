var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray (array, element) {
  newArray = [element, ...array];
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

function addElementToEndOfArray (array, element) {
  newArray2 = [...array, element];
  return newArray2;
};

function accessElementInArray (array, index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray (array) {
  var alteredArray2 = shift.array();
  return array
}
