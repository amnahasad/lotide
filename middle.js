const middle = function(arr) {

  let middleElement = [];
  let theMiddle;
  let theMiddle1;
  let theMiddle2;

  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    theMiddle1 = arr[Math.floor((arr.length - 1) / 2)];
    theMiddle2 = arr[Math.floor(arr.length / 2)];
    middleElement.push(theMiddle1);
    middleElement.push(theMiddle2);
  } else {
    theMiddle = arr[Math.floor(arr.length / 2)];
    middleElement.push(theMiddle);
  }
  return middleElement;
};



module.exports = middle;