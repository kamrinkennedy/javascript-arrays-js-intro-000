var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array, element) {
  var pooDiddly = [element, ...array];
  return pooDiddly;
};

function destructivelyAddElementToBeginningOfArray (array, element) {
  var dPooDiddly = array.unshift(element);
};