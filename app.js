// variable initialization
let customerContainer = document.querySelector(".customer-data-table");
let customerDataHeader=document.querySelector(".customer-data-header");

let customerId = document.querySelector("#customer-id");
let customerFirstName = document.querySelector("#customer-first-name");
let customerLastName = document.querySelector("#customer-last-name");
let customerEmail = document.querySelector("#customer-email");
let customerCardNumber = document.querySelector("#customer-card-number");
let customerCardType = document.querySelector("#customer-card-type");
let btnAdd = document.querySelector(".button-add-customer");

let cardTypeFilter = document.querySelector("#filter-cardtype");
let btnFilter = document.querySelector(".button-reset-filter");

// function calls
reset();

btnAdd.addEventListener("click", () => {
  console.log("am fost apasat!");
  if (btnAdd.textContent == "Add") {
    addCustomer2Database(createCustomer());
    reset();
  } else if (btnAdd.textContent == "Update") {
    btnAdd.textContent = "Add new Customer!";
    customerInfo = updateCustomer(customerInfo, customer, createCustomer());
    reset();
  }
});

customerContainer.addEventListener("click", (e) => {
  let ob = e.target;

  if (ob.tagName == "TD" && ob.className.split(" ")[0] == "customer-delete") {
    let arr = ob.className.split(" ");
    console.log("Client with ID " + arr[1] + " will be deleted");
    customerInfo = deleteCustomer(customerInfo, arr[1]);
    reset();
  } else if (ob.tagName == "TD") {
    customer = getCustomer(
      customerInfo,
      ob.parentNode.querySelector(".customer-id").textContent
    );
    customerId.value = customer.id;
    customerFirstName.value = customer.firstName;
    customerLastName.value = customer.lastName;
    customerEmail.value = customer.email;
    customerCardNumber.value = customer.cardNumber;
    customerCardType.value = customer.cardType;
    btnAdd.textContent = "Update";
  }
});

customerDataHeader.addEventListener("click",(e)=>{
  let ob=e.target;

  // let content=ob.textContent;
  // console.log(content);

  if(ob.tagName=="TH" && ob.className!==""){
    sort(ob.className);
  }
})

cardTypeFilter.addEventListener("change", (e) => {
  console.log(cardTypeFilter.value);
  customerContainer.innerHTML = createRows(
    filterCardType(customerInfo, cardTypeFilter.value)
  );
  btnFilter.style.visibility = "visible";
});

btnFilter.addEventListener("click", () => {
  reset();
});
