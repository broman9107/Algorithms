let iterationDisplay = document.getElementById("iteration-display");
let resetButton = document.getElementById("reset-button");
let constantTarget = document.getElementById("constant-target");
let constantSubmit = document.getElementById("constant-submit");
let linearTarget = document.getElementById("linear-target");
let linearArrSize = document.getElementById("linear-array-size");
let linearSubmit = document.getElementById("linear-submit");
let quadraticTarget = document.getElementById("quadratic-target");
let quadraticSubmit = document.getElementById("quadratic-submit");
let lognTarget = document.getElementById("logn-target");
let lognSubmit = document.getElementById("logn-submit");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;
let start = 0;
let end = arr.length - 1;

//------------------- On Click Functions -------------------\\

resetButton.onclick = () => {
  reset();
};

constantSubmit.onclick = () => {
  if (!iterationDisplay.innerHTML == "") {
    clearDisplay();
  }
  if (constantTarget.value === "") {
    alert("Enter Input Values");
    return;
  }
  constant(parseInt(constantTarget.value));
};

linearSubmit.onclick = () => {
  if (!iterationDisplay.innerHTML == "") {
    clearDisplay();
  }
  if (linearArrSize.value === "" || linearTarget.value === "") {
    alert("Enter Input Values");
    return;
  }
  linear(
    fillArray(parseInt(linearArrSize.value)),
    parseInt(linearTarget.value)
  );
};

quadraticSubmit.onclick = () => {
  if (!iterationDisplay.innerHTML == "") {
    clearDisplay();
  }
  if (quadraticTarget.value === "") {
    alert("Enter Input Values");
    return;
  }
  quadratic(parseInt(quadraticTarget.value));
};

lognSubmit.onclick = () => {
  if (!iterationDisplay.innerHTML == "") {
    clearDisplay();
  }
  if (lognTarget.value === "") {
    alert("Enter Input Values");
    return;
  }
  logn(parseInt(lognTarget.value));
};

//------------------- Fill Array -------------------\\

function fillArray(input) {
  let arr2 = [];
  for (i = 1; i <= input; i++) {
    arr2.push(i);
  }
  return arr2;
}

function reset() {
  iterationDisplay.innerHTML = "";
  constantTarget.value = "";
  linearArrSize.value = "";
  linearTarget.value = "";
  quadraticTarget.value = "";
  lognTarget.value = "";
}

function clearDisplay() {
  iterationDisplay.innerHTML = "";
}

//------------------- Big O Types -------------------\\

//Constant
function constant(n) {
  iterationDisplay.innerHTML = `Target Value is "${n}"\n\nConstant Algorithm iterated "1" time`;
}

//Linear
function linear(arr, target) {
  let q = 0;
  for (i = 0; i < arr.length; i++) {
    q++;
    if (iterationDisplay.innerHTML === "") {
      iterationDisplay.innerHTML = arr[i];
    } else {
      iterationDisplay.innerHTML = iterationDisplay.innerHTML.concat(
        ` ${arr[i]}`
      );
    }
    if (arr[i] === target) {
      iterationDisplay.innerHTML = iterationDisplay.innerHTML.concat(
        `\n\nFound Target Value "${arr[i]}" at Array Index "${i}"\n\nLinear Algorithm iterated "${q}" times`
      );

      return;
    }
  }
  iterationDisplay.innerHTML =
    iterationDisplay.innerHTML.concat(`\n\nTarget Not Found`);
  return;
}

//Quadratic
function quadratic(n) {
  let q = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      q++;
      if (iterationDisplay.innerHTML === "") {
        iterationDisplay.innerHTML = q;
      } else {
        iterationDisplay.innerHTML = iterationDisplay.innerHTML.concat(` ${q}`);
      }
    }
  }
  iterationDisplay.innerHTML = iterationDisplay.innerHTML.concat(
    `\n\nQuadratic Algorithm iterated "${q}" times`
  );
}

//LogN
function logn(n) {
  let q = 0;
  while (n > 1) {
    q++
    n = Math.floor(n / 2);
    if (iterationDisplay.innerHTML === "") {
      iterationDisplay.innerHTML = n;
    } else {
      iterationDisplay.innerHTML = iterationDisplay.innerHTML.concat(` ${n}`);
    }
  }
  iterationDisplay.innerHTML = iterationDisplay.innerHTML.concat(
    `\n\nLogN Algorithm iterated "${q}" times`
  );
}

//------------------- Algorithms -------------------\\

//Binary Search Recursive uses O(LogN)
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

//Binary Search Itterative uses O(LogN)
function binarySearchItterative(arr, target) {
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
