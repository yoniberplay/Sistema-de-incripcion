const carreras = {
  Redes: "Redes",
  Multimedia: "Multimedia",
  Software: "Software",
};

$(document).ready(function () {
  //! variables del document
  let valueName = "";
  let valueProvincia = "";
  let valueCiudad = "";
  let valueCarrera = "";
  let valueSector = "";
  let valueCalle = "";

  //! Events
  $.getScript("assets/js/site/index/formulario.js", function () {
    $("#main-container").html(
      formulario(
        valueName,
        valueProvincia,
        valueCiudad,
        valueSector,
        valueCalle,
        valueCarrera
      )
    );
  });

  $("#main-container").on("click", "#btn-save", function () {
    SeleccionMaterias();
  });

  $("#main-container").on("click", "#btn-finalizar", function () {
    let text = "Esta seguro que desea finalizar?\n";
    if (confirm(text) == true) {
    Reset();
    irDatosPersonales();
    toastr.success("Seleccion registrada satisfactoriamente.", "Completada", {
      TimeOut: 2000,
    });
    } 
   
  });

  $("#main-container").on("click", "#btn-aceptar", function () {
    let horarios = [];
    horarios[0] = $('input[name="inlineRadioOptions"]:checked').val();
    horarios[1] = $('input[name="inlineRadioOptions2"]:checked').val();
    horarios[2] = $('input[name="inlineRadioOptions3"]:checked').val();
    horarios[3] = $('input[name="inlineRadioOptions4"]:checked').val();
    horarios[4] = $('input[name="inlineRadioOptions5"]:checked').val();

    $.getScript("assets/js/site/index/confirmacion.js", function () {
      $("#main-container").html(
        confirmacion(
          valueName,
          valueProvincia,
          valueCiudad,
          valueSector,
          valueCalle,
          valueCarrera,
          MateriasCarrera(valueCarrera),
          horarios
        )
      );
      $("#main-container").on("click", "#irSeleccion", function () {
        irASeleccion();
      });
    });
  });

  $("#main-container").on("click", "#btn-reset", function () {
    Reset();
  });

  //! Functions
  function SeleccionMaterias() {
    if (Validate()) {
      irASeleccion();
    } else {
      toastr.error("Todos los campos son requeridos.", "Ha ocurrido un error", {
        TimeOut: 2000,
      });
    }
  }

  function irASeleccion() {
    $.getScript("assets/js/site/index/seleccionMaterias.js", function () {
      $("#main-container").remove("#seleccionMaterias");
      $("#main-container").remove("#content-formulario");
      $("#main-container").remove("#content-confirmacion");
      $("#main-container").html(
        seleccionMaterias(MateriasCarrera(valueCarrera))
      );
    });
    $("#main-container").on("click", "#irDatosPersonales", function () {
      irDatosPersonales();
    });
  }

  function irDatosPersonales() {
    $("#main-container").remove("#seleccionMaterias");
    $("#main-container").remove("#content-confirmacion");
    $("#main-container").remove("#content-formulario");
    $.getScript("assets/js/site/index/formulario.js", function () {
      $("#main-container").html(
        formulario(
          valueName,
          valueProvincia,
          valueCiudad,
          valueSector,
          valueCalle,
          valueCarrera
        )
      );
    });
  }

  function MateriasCarrera(carrera) {
    const Software = [
      "Fundamentos del computador",
      "Programacion 1",
      "Auditoria Informatica",
      "Ingles",
      "Calculo Integral",
    ];
    const Redes = [
      "Sistemas Operativos",
      "Fundamentos de redes",
      "Introducción al Diseño de Redes",
      "Ingles",
      "Calculo Integral",
    ];
    const Multimedia = [
      "Audio Digital",
      "Marketing",
      "Gráficos Vectoriales",
      "Comunicación",
      "Fotografía",
    ];

    switch (carrera) {
      case carreras.Software:
        return Software;
      case carreras.Redes:
        return Redes;
      case carreras.Multimedia:
        return Multimedia;
      default:
        return [];
    }
  }

  function Reset() {
    $("#name")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success")
      .focus();
    $("#provincia")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
    $("#ciudad")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
    $("#sector")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
    $("#calle").val("").removeClass("input-error").removeClass("input-success");
    $("#carrera")
      .removeClass("select-input-error")
      .removeClass("input-success");
    $("#carrera option:first").prop("selected", true);

    valueName = "";
    valuePhone = "";
    valueSector = "";
    valueCalle = "";
    valueCarrera = "";
    valueCiudad = "";
    valueProvincia = "";
  }

  function Validate() {
    let isValid = true;
    valueName = $("#name").val();
    valueProvincia = $("#provincia").val();
    valueCiudad = $("#ciudad").val();
    valueSector = $("#sector").val();
    valueCalle = $("#calle").val();
    valueCarrera = $("#carrera").val();
    isValid = validateInput(valueName, "#name", isValid);
    isValid = validateInput(valueProvincia, "#provincia", isValid);
    isValid = validateInput(valueCiudad, "#ciudad", isValid);
    isValid = validateInput(valueSector, "#sector", isValid);
    isValid = validateInput(valueCalle, "#calle", isValid);
    isValid = validateSelect(isValid);

    return isValid;
  }

  const validateSelect = (isValid) => {
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
  };

  const validateInput = (valuePhone, idInput, isValid) => {
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
  };
});
