// For Angle Validation
const angleA = document.querySelector("#angle-A");
const angleB = document.querySelector("#angle-B");
const angleC = document.querySelector("#angle-C");
const check = document.querySelector("#check");
const output = document.querySelector("#output");

check.addEventListener("click", () => {
  validate(
    parseFloat(angleA.value),
    parseFloat(angleB.value),
    parseFloat(angleC.value)
  );
});

function validate(a, b, c) {
  if (a + b + c === 180) {
    output.innerText = "The triangle can be formed";
  } else {
    output.innerText = "Check your angles again";
  }
}
