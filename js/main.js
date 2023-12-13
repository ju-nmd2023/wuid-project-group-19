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

function increaseQuantity() {
  let quantityInput = document.getElementById("quantityn");
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  let quantityInput = document.getElementById("quantityn");
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// OpenAI. "JavaScript function for form submission handling." OpenAI, 2023. https://www.example.com/form-handler.js

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission
  // Fetch form elements
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;

  // Perform validation (here, a basic check for non-empty fields)
  if (name && email && message) {
    // For demonstration, you can log the form values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // You can add further actions like sending the form data to a server using AJAX or displaying a success message
    alert("Form submitted successfully!");
  } else {
    alert("Please fill in all fields.");
  }
}
