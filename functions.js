// reset page function
function reset() {
  // reset add table
  customerId.value = "";
  customerFirstName.value = "";
  customerLastName.value = "";
  customerEmail.value = "";
  customerCardNumber.value = "";
  customerCardType.value = "";

  fillCustomerTable(customerContainer);
}

// customer table - fill functions
function getCustomer(customer) {
  return `
    <tr>
        <td class="customer-delete"></td>
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
    string += getCustomer(customerList[i]);
  }
  console.log("Added table info:/n" + string);
  return string;
}
function fillCustomerTable(tableContainer) {
  tableContainer.innerHTML = createRows(customerInfo);
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
