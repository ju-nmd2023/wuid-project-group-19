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
  var quantityInput = document.getElementById("quantityn");
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
  var quantityInput = document.getElementById("quantityn");
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

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

/*
  Now, you need to get the innertext form quantityn
  One you hav it, you want it in a variable (which wlil be value)
  Then you do value -= 1
  You put the value content, in the auqntityninner text

  quantityn.innerText = value

  */

/*

   0,        1,         2 
[element1, element2, element3]

Have your buttons to increase or reduce the number they must be seperate buttons


You need to have an element it can text or whatever, that element must ONLY contain a number, which will be the quntity the user chose

When your user clicks on the button + or - you listen with an event listener 
You will have to obtain the number form tje button 

innertext += 1 or -=1

When yo uclick on buy now, you will have to get the number from the uqntity section

once its done the cart section should be a popup because its easier, but basically it will edit
the pop inner html or inner text to add the corresponding potatoe

you can add the html to have the picture, to have the name, and the quantity taken from teh button

If you dont want to work with a popup we are working with cookies and those are not tasty



*/
