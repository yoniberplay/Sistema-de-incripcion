

const formulario = (valueName,valueProvincia,valueCiudad,valueSector,valueCalle,valueCarrera) => {
    return (
` <div id="content-formulario" class="row container-fluid">
        <div class="col-12 col-sm-12 col-md-4 offset-md-4 mt-5">
        
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page" id="contentasdf">Datos personales</li>
  </ol>
</nav>
          <div class="card">
            <div class="card-header bg-black text-light text-center">
              <h5>Datos personales</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label for="name" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="name" value=${valueName}>
              </div>
              <div class="mb-3">
                <label for="provincia" class="form-label">Provincia:</label>
                <input type="text" class="form-control" id="provincia" value=${valueProvincia}>
              </div>
              <div class="mb-3">
                <label for="ciudad" class="form-label">Ciudad:</label>
                <input type="text" class="form-control" id="ciudad" value=${valueCiudad}>
              </div>
              <div class="mb-3">
                <label for="sector" class="form-label">Sector:</label>
                <input type="text" class="form-control" id="sector" value=${valueSector}>
              </div>
              <div class="mb-3">
                <label for="calle" class="form-label">Calle:</label>
                <input type="text" class="form-control" id="calle" value=${valueCalle}>
              </div>
              <div class="mb-3">
                <label for="carrera" class="form-label">Carrera:</label>
                <select class="form-select" aria-label="Default select example" id="carrera">
                  <option selected>Seleccionar carrera</option>
                  <option ${valueCarrera === 'Software' ? 'selected': ''} value="Software">Software</option>
                  <option ${valueCarrera === 'Redes' ? 'selected': ''} value="Redes">Redes</option>
                  <option ${valueCarrera === 'Multimedia' ? 'selected': ''} value="Multimedia">Multimedia</option>
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
`)};