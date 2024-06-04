let fullName = prompt("Enter your fullName:");
let gender = prompt("Enter your gender (male/female):");

while (gender !== "male" || gender !== "female") {
  gender = prompt("Enter your gender (male/female):");
  if (gender === "male") {
    alert(`Welcome Mr. ${fullName}`);
    break;
  } else if (gender === "female") {
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
