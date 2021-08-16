// For Angle Validation
const angleA = document.querySelector("#angle-A");
const angleB = document.querySelector("#angle-B");
const angleC = document.querySelector("#angle-C");
const check = document.querySelector("#check");
const output = document.querySelector("#output");

check.addEventListener("click", () => {
  validate(angleA.value, angleB.value, angleC.value);
});

function validate(a, b, c) {
  if (a !== "" && b !== "" && c !== "") {
    console.log(a);
    if (
      parseFloat(a) !== 180 &&
      parseFloat(b) !== 180 &&
      parseFloat(c) !== 180
    ) {
      if (parseFloat(a) + parseFloat(b) + parseFloat(c) === 180) {
        output.innerText = "The triangle can be formed";
      } else {
        output.innerText = "Check your angles again, they do not add up to 180";
      }
    } else {
      output.innerText = "Angle cannot be 180";
    }
  } else {
    output.innerText = "Please enter a valid input";
  }
}
