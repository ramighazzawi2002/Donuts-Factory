let fullName = prompt("Enter your fullName:");

let gender = () => prompt("Enter your gender (male/female):");

gender();

while (gender() !== "male" || gender() !== "female") {
  gender();
  if (gender() === "male") {
    alert(`Welcome Mr. ${fullName}`);
    break;
  } else if (gender() === "female") {
    alert(`Welcome Ms. ${fullName}`);
    break;
  }
}

let orderType = confirm(
  "Do you want to order Donut, Coffee, Ice cream, or Bakery?"
);
let orderfullName;
if (orderType) {
  orderfullName = prompt("Please write the Name of the order:");
  alert("Your order is getting prepared...");
}

console.log(`Order placed by ${fullName}: ${orderType} - ${orderfullName}`);

// When the user answers all the questions you should save the answers in an array, it will contain [username, gender, type of Order , Order name ]
let orderDetails = [fullName, gender, orderType, orderfullName];

// Loop through the array and print the element using console (for loop)

for (let i = 0; i < orderDetails.length; i++) {
  console.log(orderDetails[i]);
}
