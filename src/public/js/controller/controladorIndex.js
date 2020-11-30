class ControladorIndex {

    constructor() {
        this.elemento
    }

    AñadirClase(id, clase) {
        this.elemento = document.getElementById(id)
        this.elemento.classList.add(clase);
    }

    QuitarClase(id, clase) {
        this.elemento = document.getElementById(id)
        this.elemento.classList.remove(clase);
    }
}

export default ControladorIndex