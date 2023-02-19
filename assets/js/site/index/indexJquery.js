const carreras = {
	Redes: "Redes",
	Multimedia: "Multimedia",
	Software: "Software",
}

const formulario =`

<div id="content-container" class="row container-fluid">



        <div class="col-12 col-sm-12 col-md-4 offset-md-4 mt-5">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Datos personales</li>
  </ol>
</nav>
          <div class="card">
            <div class="card-header bg-black text-light text-center">
              <h5>Datos personales</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="name" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="provincia" class="form-label">Provincia:</label>
                <input type="text" class="form-control" id="provincia" />
              </div>
              <div class="mb-3">
                <label for="ciudad" class="form-label">Ciudad:</label>
                <input type="text" class="form-control" id="ciudad" />
              </div>
              <div class="mb-3">
                <label for="sector" class="form-label">Sector:</label>
                <input type="text" class="form-control" id="sector" />
              </div>
              <div class="mb-3">
                <label for="calle" class="form-label">Calle:</label>
                <input type="text" class="form-control" id="calle" />
              </div>
              <div class="mb-3">
                <label for="carrera" class="form-label">Carrera:</label>
                <select class="form-select" aria-label="Default select example" id="carrera">
                  <option selected>Seleccionar carrera</option>
                  <option value="Software">Software</option>
                  <option value="Redes">Redes</option>
                  <option value="Multimedia">Multimedia</option>
                </select>
              </div>
              <div class="">
                  <button
                  id="btn-save"
                  type="button"
                  class="btn btn-outline-primary w-100 mb-2"
                >
                  Next
                </button>
                <button
                  id="btn-reset"
                  type="button"
                  class="btn btn-outline-warning w-100 me-2"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

$(document).ready(function () {
  //variables del document
  let valueName = "";
  let valueProvincia = "";
  let valueCiudad = "";
  let valueCarrera = "";
  let valueSector = "";
  let valueCalle = "";
  //Events

//!-------------------------------------------
  // $("#main-container").append(formulario);

  $("#content-container").on("click", "#btn-save", function () {
    CreateContact();
  });

  $("#content-container").on("click", "#btn-reset", function () {
    Reset();
  });
  $("#content-container").on("click", "#btn-back", function () {
    GenerateHtmlForm();
  });

  $("#content-container").on("click", "#btn-end", function () {
    $.confirm({
      title: "Are you sure want to create this contact?",
      content: "",
      buttons: {
        cancel: {
          text: "Cancel",
          btnClass: "btn btn-danger",
          action: function () {},
        },
        confirm: {
          text: "Accept",
          btnClass: "btn btn-success",
          action: function () {
            GenerateHtmlContact();
            GenerateHtmlForm();
            Reset();
            toastr.success("Contact create successfully", "Notification", {
              TimeOut: 2000,
            });
          },
        },
      },
    });
  });

  $("#contact-container").on("click", ".btn-delete", function () {
    const mainContainer = $(this).closest(".col-12");

    $.confirm({
      title: "Are you sure want to delete this contact?",
      content: "",
      buttons: {
        cancel: {
          text: "Cancel",
          btnClass: "btn btn-danger",
          action: function () {},
        },
        confirm: {
          text: "Accept",
          btnClass: "btn btn-success",
          action: function () {
            mainContainer.remove();
          },
        },
      },
    });
  });

  //Functions

  function CreateContact() {
    if (Validate()) {
      GenerateHtmlConfirmation();
    } else {
      toastr.error("All information is required", "Oops error has ocurred", {
        TimeOut: 2000,
      });
    }
  }

  function GenerateHtmlContact() {
    const htmlContact = `<div class="col-12 col-sm-12 col-md-4 mt-3">
          <div class="card">
            <div class="card-header bg-dark text-light text-center">
              <h5 class="text-center fw-bold">Contact - ${valueContactType}</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${valueName}</li>
                <li class="list-group-item">Phone: ${valuePhone}</li>
              </ul>
              <button
                type="button"
                class="btn btn-outline-danger mt-2 float-end btn-delete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        `;
    $("#contact-container").append(htmlContact);
  }

  function GenerateHtmlConfirmation() {
    const htmlConfirmation = `<div class="col-12 col-sm-12 col-md-4 offset-md-4">
          <div class="card">
            <div class="card-header bg-success text-light text-center">
              <h5 class="text-center fw-bold">Confirmation</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${valueName}</li>
                <li class="list-group-item">Phone: ${valuePhone}</li>
                  <li class="list-group-item">Contact type: ${valueContactType}</li>
              </ul>
              <div class="mt-2">
                <button
                  id="btn-end"
                  type="button"
                  class="btn btn-outline-primary float-end"
                >
                  Create
                </button>
                <button
                  id="btn-back"
                  type="button"
                  class="btn btn-outline-warning float-end me-2"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div> 
        `;
    $("#content-container").html(htmlConfirmation);
  }

  function GenerateHtmlForm() {
    const htmlForm = `    <div class="col-12 col-sm-12 col-md-4 offset-md-4">
          <div class="card">
            <div class="card-header bg-primary text-light text-center">
              <h5>Register form</h5>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">
                All information is required
              </h5>

              <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone:</label>
                <input type="text" class="form-control" id="phone" />
              </div>
              <div id="radio-container" class="mb-3">
                <label for="contact-type" class="form-label"
                  >Contact type:</label
                >

                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="ContactType"
                    id="academy-radio"
                    value="Academy"
                  />
                  <label class="form-check-label" for="academy-radio"
                    >Academy</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="ContactType"
                    id="office-radio"
                    value="Office"
                  />
                  <label class="form-check-label" for="office-radio"
                    >Office</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="ContactType"
                    id="casual-radio"
                    value="Casual"
                  />
                  <label class="form-check-label" for="casual-radio"
                    >Casual</label
                  >
                </div>
              </div>
              <div>
                <button
                  id="btn-save"
                  type="button"
                  class="btn btn-outline-primary float-end"
                >
                  Next
                </button>
                <button
                  id="btn-reset"
                  type="button"
                  class="btn btn-outline-warning float-end me-2"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        `;
    $("#content-container").html(htmlForm);

    $("#name").val(valueName);
    $("#phone").val(valuePhone);
    $(`#radio-container input[type='radio'][value=${valueContactType}]`).prop(
      "checked",
      true
    );
  }

  function Reset() {
    $("#name")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success")
      .focus();
    $("#provincia").val("").removeClass("input-error").removeClass("input-success");
    $("#ciudad").val("").removeClass("input-error").removeClass("input-success");
    $("#sector").val("").removeClass("input-error").removeClass("input-success");
    $("#calle").val("").removeClass("input-error").removeClass("input-success");
    $("#carrera").removeClass("select-input-error").removeClass("input-success");

   
    valueName = "";
    valuePhone = "";
    valueSector= "";
    valueCalle= "";
    valueCarrera= "";
    valueProvincia= "";
  }

  function Validate() {
    let isValid = true;
    valueName = $("#name").val(); 
    valueProvincia = $("#provincia").val();
    valueCiudad = $("#ciudad").val();
    valueSector = $("#sector").val();
    valueCalle = $("#calle").val();
    valueCarrera = $("#carrera").val();
    isValid = validateInput(valueName,"#name",isValid);
    isValid = validateInput(valueProvincia,"#provincia",isValid);
    isValid = validateInput(valueCiudad,"#ciudad",isValid);
    isValid = validateInput(valueSector,"#sector",isValid);
    isValid = validateInput(valueCalle,"#calle",isValid);
    isValid = validateSelect(isValid);
    console.log(isValid);
    return isValid;;
  }


  const validateSelect = ( isValid ) =>{
    $("#carrera").addClass("input-success");
    $("#carrera").removeClass("select-input-error");
    switch (valueCarrera) {
      case carreras.Software:
      case carreras.Redes:
      case carreras.Multimedia:
        if (!isValid) {
          return false;
        } else {
          return true;
        }
      default:
      $("#carrera").addClass("select-input-error");
      $("#carrera").removeClass("input-success");
      return false;
    }
  }


  const validateInput = (valuePhone, idInput, isValid) =>{

    if (valuePhone == "" || valuePhone == undefined || valuePhone == null) {
      $(idInput).addClass("input-error");
      $(idInput).removeClass("input-success");
      return false;
    } else {
      $(idInput).removeClass("input-error");
      $(idInput).addClass("input-success");
      if (!isValid) {
        return false;
      } else {
        return true;
      }
    }

    
  }
});
