const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const selectContactType = document.getElementById("contact-type");

function formClear() {
  inputClear(inputName, true);
  inputClear(inputPhone, false);
  inputClear(selectContactType, false);
}
function createContact() {
  if (!validate()) {
    alert("All information is required");
  } else {
    const valueName = inputName.value;
    const valuePhone = inputPhone.value;
    const valueContactType = selectContactType.value;
    const mainContainer = document.getElementById("contact-container");

    const divCol4 = document.createElement("div");//0x1
    divCol4.setAttribute("class", "col-12 col-sm-12 col-md-4 mt-2");

    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

    const divCardHeader = document.createElement("div");
    divCardHeader.setAttribute(
      "class",
      "card-header bg-dark text-light text-center"
    );

    const h5CardHeader = document.createElement("h5");
    h5CardHeader.setAttribute("class", "text-center fw-bold");
    h5CardHeader.innerText = `Contact - ${valueContactType}`; //string interpolation

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const ulCardBody = document.createElement("ul");
    ulCardBody.setAttribute("class", "list-group list-group-flush");

    const liName = document.createElement("li");
    liName.setAttribute("class", "list-group-item");
    liName.innerText = `Name - ${valueName}`;

    const liPhone = document.createElement("li");
    liPhone.setAttribute("class", "list-group-item");
    liPhone.innerText = `Phone - ${valuePhone}`;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-outline-danger mt-2 float-end");
    btnDelete.innerText = "Delete";
    btnDelete.type = "button";
    btnDelete.addEventListener("click", function () {
      if (confirm("Are you sure want to delete this contact?")) {
        mainContainer.removeChild(divCol4); //0x1
      }
    });

    divCardHeader.appendChild(h5CardHeader);

    divCardBody.appendChild(ulCardBody);
    divCardBody.appendChild(btnDelete);

    ulCardBody.appendChild(liName);
    ulCardBody.appendChild(liPhone);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);

    divCol4.appendChild(divCard);

    mainContainer.appendChild(divCol4);
    formClear();
  }
}

function validate() {
  const valueName = inputName.value;
  const valuePhone = inputPhone.value;
  const valueContactType = selectContactType.value;
  let isValid = true;

  isValid = inputValidator(inputName, valueName, isValid);
  isValid = inputValidator(inputPhone, valuePhone, isValid);
  isValid = inputValidator(selectContactType, valueContactType, isValid);

  return isValid;
}

function inputValidator(input, value, isValid) {
  if (value == "" || value == null || value == undefined) {
    input.classList.add("input-error");
    input.classList.remove("input-success");
    return false;
  } else {
    input.classList.add("input-success");
    input.classList.remove("input-error");
    if (!isValid) {
      return false;
    } else {
      return true;
    }
  }
}

function inputClear(input, isFocus) {
  input.value = "";
  input.classList.remove("input-success");
  input.classList.remove("input-error");
  if (isFocus) {
    input.focus();
  }
}
