
const seleccionMaterias = (pensum) => {
 
    const form = `
    <div id="seleccionMaterias" class="row container-fluid">
        <div class="col-12 col-sm-12 col-md-4 offset-md-4 mt-5">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" id="irDatosPersonales" >Datos personales</a></li>
          <li class="breadcrumb-item active" aria-current="page">Seleccion</li>
        </ol>
      </nav>
          <div class="card">
            <div class="card-header bg-primary text-light text-center">
              <h5>Seleccion de materias</h5>
            </div>
            <div class="card-body">

              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#materia1" aria-expanded="false" aria-controls="materia11">
                      ${pensum[0]}
                    </button>
                  </h2>
                  <div id="materia1" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Lu 18:00 - 20:00" checked>
                        <label class="form-check-label" for="inlineRadio1">Lu 18:00 - 20:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Ma 14:00 - 16:00">
                        <label class="form-check-label" for="inlineRadio2">Ma 14:00 - 16:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Ju 15:00 - 17:00">
                        <label class="form-check-label" for="inlineRadio3">Ju 15:00 - 17:00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="accordion" id="accordionExample2">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#materia2" aria-expanded="false" aria-controls="materia2">
                    ${pensum[1]}
                    </button>
                  </h2>
                  <div id="materia2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio21" value="Sa 08:00 - 12:00" checked>
                        <label class="form-check-label" for="inlineRadio21">Sa 08:00 - 12:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio22" value="Ma 18:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio22">Ma 18:00 - 20:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio23" value="Vi 18:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio23">Vi 18:00 - 20:00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample3">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#materia3" aria-expanded="false" aria-controls="materia3">
                    ${pensum[2]}
                    </button>
                  </h2>
                  <div id="materia3" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample3">
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio31" value="Vi 16:00 - 17:00" checked>
                        <label class="form-check-label" for="inlineRadio31">Vi 16:00 - 17:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio32" value="Ma 18:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio32">Ma 18:00 - 20:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio33" value="Mi 18:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio33">Mi 18:00 - 20:00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample4">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#materia4" aria-expanded="false" aria-controls="materia4">
                    ${pensum[3]}
                    </button>
                  </h2>
                  <div id="materia4" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample4">
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio41" value="Sa 08:00 - 12:00" checked>
                        <label class="form-check-label" for="inlineRadio41">Sa 08:00 - 12:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio42" value="Ma 18:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio42">Ma 18:00 - 20:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio43" value="Ma 14:00 - 16:00">
                        <label class="form-check-label" for="inlineRadio43">Ma 14:00 - 16:00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample5">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#materia5" aria-expanded="false" aria-controls="materia5">
                    ${pensum[4]}
                    </button>
                  </h2>
                  <div id="materia5" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample5">
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadios51" value="Lu 18:00 - 20:00" checked>
                        <label class="form-check-label" for="inlineRadio1">Lu 18:00 - 20:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio52" value="Vi 17:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio2">Vi 17:00 - 20:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio53" value="Mi 18:00 - 20:00">
                        <label class="form-check-label" for="inlineRadio2">Mi 18:00 - 20:00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                  <button
                  id="btn-aceptar"
                  type="button"
                  class="btn btn-primary w-100 mt-2"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>  `;

    return form;

}