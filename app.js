// let fullName = prompt("Enter your fullName:");

// let gender = () => prompt("Enter your gender (male/female):");

// let genderValue = gender();

// while (genderValue !== "male" && genderValue !== "female") {
//   genderValue = gender();
//   if (genderValue === "male") {
//     alert(`Welcome Mr. ${fullName}`);
//     break;
//   } else if (genderValue === "female") {
//     alert(`Welcome Ms. ${fullName}`);
//     break;
//   }
// }

// let orderType = confirm(
//   "Do you want to order Donut, Coffee, Ice cream, or Bakery?"
// );
// let orderfullName;
// if (orderType) {
//   orderfullName = prompt("Please write the Name of the order:");
//   alert("Your order is getting prepared...");
// }

// console.log(`Order placed by ${fullName}: ${orderType} - ${orderfullName}`);

// // When the user answers all the questions you should save the answers in an array, it will contain [username, gender, type of Order , Order name ]
// let orderDetails = [fullName, genderValue, orderType, orderfullName];

// Loop through the array and print the element using console (for loop)

const form = document.getElementById("form");
const fullNameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const genderEl = document.getElementById("gender");
const orderTypeEl = document.getElementById("orderType");
let fullName, age, gender, orderType;
const p = document.createElement("p");
let div = document.getElementById("result");
const ol = document.createElement("ol");

div.appendChild(p);

form.addEventListener("submit", e => {
  ol.innerHTML = "";

  e.preventDefault();
  console.log(e);
  fullName = "fullName : " + fullNameEl.value;
  age = "Age : " + ageEl.value;
  gender = "Gender : " + genderEl.value;
  orderType = "orderType : " + orderTypeEl.value;
  let drinkChoice;
  if (e.target.group[0].checked) {
    drinkChoice = "Drink Choice : " + e.target.group[0].value;
  } else if (e.target.group[1].checked) {
    drinkChoice = "Drink Choice : " + e.target.group[1].value;
  }

  let orderDetails = [fullName, age, gender, orderType, drinkChoice];

  for (let i = 0; i < orderDetails.length; i++) {
    console.log(orderDetails[i]);
  }

  p.textContent = fullName;
  p.style.marginLeft = "15px";
  p.style.fontWeight = "bold";
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
});
