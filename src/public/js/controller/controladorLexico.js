class ControladorLexico {
  
  constructor(num, tok, des, lin) {
    this.numero = num
    this.token = tok
    this.descripcion = des
    this.linea = lin
    this.arreglo = []
    this.patronComparacion = /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i
    this.patronMain = /^task main+[(\w*\s*)]+$/i
    this.patronLlaveInicio = /^\s*{+$/i
    this.patronLlaveFin = /^\s*}+$/i
    this.patronComentario = /^\s*[//]\w*/i
    this.patronCadena = /^\s*var|const \w* = '\w*'+$/i
    this.patronInstancia = /\s* a|var|const \w* \s*|= new \w*[(\w*|\d*)]+$/i
    this.patronIf = /^\s*if[(\w*)]+$/
    this.patronElse = /^\s*else+$/
    this.patronWhile = /^\s*while[(\w*)]+$/
    this.patronFunction = /^\s*function \w*\s*[(\w*)]+$/
    this.patronTiempo = /^\s*wait1msec[(\w*)]+$/
    this.patronReservada = /^\s*new|Servo|Relay|Sensor|Motor|return|PI/
    this.patronMetodoRun = /^\s*\w*[.]run[(\d*\w*)]+$/i
    this.patronMetodoOff = /^click|off+$/i
    this.patronMetodoPos = /^\s*\w*[.]position[(\d*\w*)]+$/i
    this.patronMetodoOn = /^click|on+$/i
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
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Variable", 1))
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
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Función declarada", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronComparacion) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Comparación", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronInstancia) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Instancia", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronMetodoRun) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo run", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronMetodoOff) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo relay", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronMetodoPos) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo posicion", 1))
      }

      else if (this.Comprobar(this.arreglo[i], this.patronMetodoOn) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo relay", 1))
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