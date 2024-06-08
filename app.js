let fullName = prompt("Enter your fullName:");

let gender = () => prompt("Enter your gender (male/female):");

let genderValue = gender();

while (genderValue !== "male" && genderValue !== "female") {
  genderValue = gender();
  if (genderValue === "male") {
    alert(`Welcome Mr. ${fullName}`);
    break;
  } else if (genderValue === "female") {
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
let orderDetails = [fullName, genderValue, orderType, orderfullName];

// Loop through the array and print the element using console (for loop)
let div = document.getElementById("result");

for (let i = 0; i < orderDetails.length; i++) {
  console.log(orderDetails[i]);
}
const p = document.createElement("p");

p.textContent = fullName;
div.appendChild(p);
p.style.marginLeft = "15px";
p.style.fontWeight = "bold";
const ol = document.createElement("ol");
ol.style.marginLeft = "20px";

for (let i = 1; i < orderDetails.length; i++) {
  let li = document.createElement("li");
  li.textContent = orderDetails[i];
  li.style.marginTop = "10px";
  li.style.fontSize = "16px";
  li.style.fontWeight = "bold";
  ol.appendChild(li);
}

div.appendChild(ol);
