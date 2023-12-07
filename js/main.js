const headingelement = document.getElementById("question");
const inputelement = document.getElementById("textbox");
const buttonelement = document.getElementById("button");

buttonelement.addEventListener("click", function (event) {
  let enteredText = inputelement.value;

  if (enteredText === "yes") {
    headingelement.innerText = "Congratulations,\n discount code: Ecopotato24";
  } else {
    headingelement.innerText = "Wrong Answer.";
  }
});
