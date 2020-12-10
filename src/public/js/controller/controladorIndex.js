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

    ErrorSintactico(elemento, btn) {
        if (elemento.innerText != 'Ningun problema ha sido detectado') {
            this.QuitarClase(btn, "txtnegro")
            this.AñadirClase(btn, "txtrojo")
        }

        else{
            this.QuitarClase(btn, "txtrojo")
            this.AñadirClase(btn, "txtnegro")
        }
    }
}

export default ControladorIndex