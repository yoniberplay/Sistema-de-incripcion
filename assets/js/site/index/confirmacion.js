const confirmacion = (
  valueName,
  valueProvincia,
  valueCiudad,
  valueSector,
  valueCalle,
  valueCarrera,
  materias,
  horarios
) => {

let horario = '';

    // for (const i of materias) {
    //    horario += `<tr>
    //    <th scope="row">${i}</th>
    //    <td>Mark</td>
    //    <td>Otto</td>
    //    <td>Mark</td>
    //    <td>Otto</td>
    //    <td>Mark</td>
    //    <td>Otto</td>       
    //  </tr>`;
    // }

    for (let index = 0; index < materias.length; index++) {
        let hora = horarios[index];
        horario += `<tr>
        <th scope="row">${materias[index]}</th>
        <td>${hora.includes("Lu") ? hora: ''}</td>
        <td>${hora.includes("Ma") ? hora: ''}</td>
        <td>${hora.includes("Mi") ? hora: ''}</td>
        <td>${hora.includes("Ju") ? hora: ''}</td>
        <td>${hora.includes("Vi") ? hora: ''}</td>
        <td>${hora.includes("Sa") ? hora: ''}</td>
        
      </tr>`;        
    }

  return ` <div id="content-confirmacion" class="row container-fluid">
            <div class="col-12 col-sm-12 col-md-4 offset-md-4 mt-5">
            
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" id="irDatosPersonales" >Datos personales</a></li>
              <li class="breadcrumb-item"><a href="#" id="irSeleccion" >Seleccion</a></li>
              <li class="breadcrumb-item active" aria-current="page">Confirmacion</li>
            </ol>
          </nav>
              <div class="card">
                <div class="card-header bg-success text-light text-center">
                  <h5>Confirmacion</h5>
                </div>
                <div class="card-body">
                <div class="card">
                <div class="card-header bg-primary text-light text-center">
                  <h5>Datos basicos</h5>
                </div>
                <div class="card-body p-0">

                <div class="">
                <ul class="list-group ">
                <li class="list-group-item"><span class="fw-bold">Nombre: </span>${valueName}</li>
                <li class="list-group-item"><span class="fw-bold">Provincia: </span>${valueProvincia} </li>
                <li class="list-group-item"><span class="fw-bold">Ciudad: </span>${valueCiudad} </li>
                <li class="list-group-item"><span class="fw-bold">Sector: </span>${valueSector} </li>
                <li class="list-group-item"><span class="fw-bold">Calle: </span>${valueCalle} </li>
                <li class="list-group-item"><span class="fw-bold">Carrera: </span>${valueCarrera} </li>
              </ul>
                </div>
                </div>
              </div>

              <table class="table table-dark table-striped mt-2">
  <thead>
    <tr>
      <th scope="col">Asignatura</th>
      <th scope="col">Lu</th>
      <th scope="col">Ma</th>
      <th scope="col">Mi</th>
      <th scope="col">Ju</th>
      <th scope="col">Vi</th>
      <th scope="col">Sa</th>
    </tr>
  </thead>
  <tbody>
    ${horario}
    
  </tbody>
</table>
                  <div class="">
                      <button
                      id="btn-finalizar"
                      type="button"
                      class="btn btn-success w-100 mb-2"
                    >
        Finalizar                    
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
};
{
  /* <tr>
    <th scope="row">${materias[1]}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>     
    </tr>
    <tr>
    <th scope="row">${materias[2]}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>     
    </tr>
    <tr>
    <th scope="row">${materias[3]}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>     
    </tr>
    <tr>
    <th scope="row">${materias[4]}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>Mark</td>
    <td>Otto</td>     
    </tr> */
}
