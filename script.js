let result = document.getElementById("result");
getData();

function getData() {
  if (
    confirm("If you want Case Sensitivity apply press OK, else press Cancel")
  ) {
    let caseSensInput = prompt("Enter your text");
    prepareInput(caseSensInput);
  } else {
    let nonCaseSensInput = prompt("Enter your text").toLocaleLowerCase();
    prepareInput(nonCaseSensInput);
  }
}

function prepareInput(text) {
  if (text.length % 2 == 0) {
    let text1 = text.slice(0, text.length / 2);
    let text2 = text.slice(text.length / 2, text.length);
    compareSides(text1, text2);
  } else {
    let text1 = text.slice(0, Math.floor(text.length / 2));
    let text2 = text.slice(Math.floor(text.length / 2) + 1, text.lenght);
    compareSides(text1, text2);
  }
}

function compareSides(left, right) {
  let count = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i] == right[right.length - (i + 1)]) {
      count += 1;
    }
  }
  if (count == left.length) {
    result.innerHTML = "PASS";
  } else {
    result.innerHTML = "FAIL";
  }
}
