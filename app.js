// variable initialization
let customerContainer = document.querySelector(".customer-data-table");

let customerId = document.querySelector("#customer-id");
let customerFirstName = document.querySelector("#customer-first-name");
let customerLastName = document.querySelector("#customer-last-name");
let customerEmail = document.querySelector("#customer-email");
let customerCardNumber = document.querySelector("#customer-card-number");
let customerCardType = document.querySelector("#customer-card-type");
let btnAdd = document.querySelector(".button-add-customer");

// function calls
fillCustomerTable(customerContainer);

btnAdd.addEventListener("click", () => {
  console.log("am fost apasat!");
  customerInfo.push(createCustomer());
  reset();
});
