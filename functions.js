// helpers
function reset() {
  btnFilter.style.visibility = "hidden";

  // reset add table
  customerId.value = "";
  customerFirstName.value = "";
  customerLastName.value = "";
  customerEmail.value = "";
  customerCardNumber.value = "";
  customerCardType.value = "";

  fillCustomerTable(customerContainer, customerInfo);
  populateCardType(customerInfo);
}
function idInUse(customerList, customerId) {
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i].id == customerId) {
      return true;
    }
  }
  return false;
}
function existsCustomer(customerList, customer) {
  for (let i = 0; i < customerList.length; i++) {
    if (areCustomersEqual(customerList[i], customer)) {
      return true;
    }
  }
  return false;
}
function areCustomersEqual(customer1, customer2) {
  return (
    customer1.firstName == customer2.firstName &&
    customer1.lastName == customer2.lastName
  );
}

// customer table - fill functions
function generateCustomerHTML(customer) {
  return `
    <tr>
        <td class="customer-delete ${customer.id}"></td>
        <td class="customer-id">${customer.id}</td>
        <td class="customer-first-name">${customer.firstName}</td>
        <td class="customer-last-name">${customer.lastName}</td>
        <td class="customer-email">${customer.email}
        <td class="customer-card-number">${customer.cardNumber}</td>
        <td class="customer-card-type">${customer.cardType}</td>
    </tr>
    `;
}
function createRows(customerList) {
  let string = "";
  for (let i = 0; i < customerList.length; i++) {
    string += generateCustomerHTML(customerList[i]);
  }
  console.log("=== Table refreshed ===");
  return string;
}
function fillCustomerTable(tableContainer, customerList) {
  tableContainer.innerHTML = createRows(customerList);
}

// table - add functions
function createCustomer() {
  let newCustomer = {
    id: customerId.value,
    firstName: customerFirstName.value,
    lastName: customerLastName.value,
    email: customerEmail.value,
    cardNumber: customerCardNumber.value,
    cardType: customerCardType.value,
  };
  return newCustomer;
}
function addCustomer2Database(customer) {
  if (!idInUse(customerInfo, customer.id)) {
    console.log("ID not used...");
    if (!existsCustomer(customerInfo, customer)) {
      console.log("Customer does not exist");
      customerInfo.push(customer);
    } else {
      console.log("Customer already exists!");
      alert("Customer already exists!");
    }
  } else {
    console.log("ID already in use!");
    alert("ID already in use!");
  }
}

//table - update functions
function getCustomer(customerList, customerId) {
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i].id == customerId) {
      return customerList[i];
    }
  }
  return null;
}
function updateCustomer(customerList, customer, newCustomer) {
  for (let i = 0; i < customerList.length; i++) {
    if (areCustomersEqual(customerList[i], customer)) {
      customerList[i] = newCustomer;
    }
  }
  return customerList;
}

//delete
function deleteCustomer(customerList, customerId) {
  let newList = [];
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i].id != customerId) {
      newList.push(customerList[i]);
    }
  }
  return newList;
}

// table - filter functions
function populateCardType(customerList) {
  let cardTypes = getCardTypes(customerList);

  cardTypeFilter.innerHTML = `
  <option id="default-brand-filter" value="default" hidden selected> -- Please select an option -- </option>
  `;

  cardTypes.forEach((e) => {
    let option = document.createElement("option");
    option.textContent = e;
    cardTypeFilter.appendChild(option);
  });
}
function getCardTypes(customerList) {
  console.log("start getCardTypes()");
  let newList = [];
  for (let i = 0; i < customerList.length; i++) {
    if (newList.includes(customerList[i].cardType) === false) {
      newList.push(customerList[i].cardType);
    }
  }
  return newList;
}
function filterCardType(customerList, cardType) {
  let newList = [];
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i].cardType == cardType) {
      newList.push(customerList[i]);
    }
  }
  return newList;
}


// table - sort functions
function sort(className){
  let columnName=className.split(" ")[0];
  // console.log(columnName);

  if(columnName=="sort-id"){

  }
}
function sortById(){

}