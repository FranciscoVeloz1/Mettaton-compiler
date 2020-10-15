class Manejador {
    constructor(num, tok, des, lin) {
        this.numero = num
        this.token = tok
        this.descripcion = des
        this.linea = lin
        this.token = []
        this.coleccion = []
    }

    Separar(palabra) {
        this.token = palabra.split("\n")
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

    Generar() {
        for (let i = 0; i < this.token.length; i++) {
            this.coleccion.push(new Manejador(i + 1, this.token[i], "descripcion", i + 1))
        }
    }

}

export default Manejador