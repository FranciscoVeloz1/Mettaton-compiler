class ControladorIndex {

    constructor() {
        this.elemento
    }

    OcultarClase(id, clase) {
        this.elemento = document.getElementById(id)
        this.elemento.classList.add(clase);
    }

    MostrarClase(id, clase) {
        this.elemento = document.getElementById(id)
        this.elemento.classList.remove(clase);
    }
}

export default ControladorIndex