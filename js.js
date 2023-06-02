let linearTarget = document.getElementById("linear-target");
let linearArrSize = document.getElementById("linear-array-size");
let linearSubmit = document.getElementById("linear-submit");
let consoleLogging = document.getElementById("console-logging");

linearSubmit.onclick = () => {
  if (linearArrSize.value === "" || linearTarget.value === "") {
    alert("No Values");
    return;
  }
  consoleLogging.innerHTML = linear(fillArray(parseInt(linearArrSize.value)), parseInt(linearTarget.value));
  linearArrSize.value = "";
  linearTarget.value = "";
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;
let start = 0;
let end = arr.length - 1;

function fillArray(input) {
    let arr2 = [];
  for (i = 1; i <= input; i++) {
    arr2.push(i);  
  }
  return arr2;
}

function constant(n) {
  return n;
}

function linear(arr, target) { 
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return arr[i];
    }
  }
  return "Target not found";
}

function quadratic(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      console.log("Hey");
    }
  }
}

function logn(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
    console.log(n);
  }
}

function binarySearchRecursive(arr, start, end, target) {
  if (start > end) {
    return false;
  }
  let midIndex = Math.floor((start + end) / 2);
  console.log(midIndex);
  if (arr[midIndex] === target) {
    return arr[midIndex];
  } else {
    if (arr[midIndex] > target) {
      return binarySearchRecursive(arr, start, midIndex - 1, target);
    } else {
      return binarySearchRecursive(arr, midIndex + 1, end, target);
    }
  }
}

function binarySearchWhile(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let midIndex = Math.floor((start + end) / 2);
    console.log(midIndex);
    if (arr[midIndex] === target) {
      return arr[midIndex];
    } else if (arr[midIndex] > target) {
      end = midIndex - 1;
    } else {
      start = midIndex + 1;
    }
  }
  return "Could not find target";
}
