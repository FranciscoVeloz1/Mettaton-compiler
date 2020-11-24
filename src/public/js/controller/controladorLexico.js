class ControladorLexico {
  
  constructor(num, tok, des, lin) {
    this.numero = num
    this.token = tok
    this.descripcion = des
    this.linea = lin
    this.arreglo = []
    this.patronComparacion = /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i
    this.patronMain = /^task main+[()]+$/i
    this.patronLlaveInicio = /^\s*{+$/i
    this.patronLlaveFin = /^\s*}+$/i
    this.patronComentario = /^\s*[//]\w*/i
    this.patronCadena = /^\s*var|const \w* = '\w*'+$/i
    this.patronInstancia = /\s* var|const \w* = new \w*[(\w*|\d*)]+$/i
    this.patronIf = /^\s*if[(\w*)]+$/
    this.patronElse = /^\s*else+$/
    this.patronWhile = /^\s*while[(\w*)]+$/
    this.patronFunction = /^\s*function \w*[(\w*)]+$/
    this.patronTiempo = /^\s*wait1msec[(\w*)]+$/
    this.patronReservada = /^\s*new|Servo|Relay|Sensor|Motor|return|PI/
    this.patronMetodo = /^click|run|off|position|on+$/i
    this.anyFunction = /^\s*\w*[(]\w\w*[)]+$/i
  }

  Separar(palabra) {
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

  LimpiarTabla(arreglo, elemento) {
    while (arreglo.length > 0) {
      arreglo.pop()
    }

    document.getElementById(elemento).innerHTML = ""
  }

  AnalizadorLexico(arreglo, elemento) {
    for (let i = 0; i < this.arreglo.length; i++) {

      if (this.Comprobar(this.arreglo[i], this.patronMain) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo principal", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronLlaveInicio) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Llave inicio", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronLlaveFin) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Llave fin", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronComentario) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Comentario", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronCadena) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Cadena", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronIf) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Declaración if", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronWhile) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Estructura de control", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronElse) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Declaración else", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronTiempo) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo tiempo", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronFunction) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Función", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.anyFunction) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Función", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronComparacion) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Comparación", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronInstancia) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Instancia", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronMetodo) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronReservada) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Palabra reservada", 1))
      }

      else {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "No identificado", 1))
      }

      document.getElementById(elemento).innerHTML += arreglo[i].Mostrar()
    }
  }
}

export default ControladorLexico