class Manejador {
    constructor(num, tok, des, lin) {
        this.numero = num
        this.token = tok
        this.descripcion = des
        this.linea = lin
        this.arreglo = []
    }

    Separar(palabra) {
        //this.arreglo = palabra.split(/[\n\s ]+/)
        this.arreglo = palabra.split(/[\n]+/)
    }

    Mostrar() {
        return `
        <tr> 
            <td> ${this.numero} </td>
            <td> ${this.token} </td>
            <td> ${this.descripcion} </td>
            <td> ${this.linea} </td>
        </tr>`
    }

    Comprobar(tokens, patron) {
        let comparacion = patron.test(tokens)
        let r
        if (comparacion != false) {
            r = true
        }
        return r
    }
}

export default Manejador