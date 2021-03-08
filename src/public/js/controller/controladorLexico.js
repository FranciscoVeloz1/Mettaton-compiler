class ControladorLexico {

  constructor(num, tok, des, lin) {
    this.numero = num
    this.token = tok
    this.descripcion = des
    this.linea = lin
    this.arreglo = []
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

    const patronComparacion = /^[(]\w*\s*c|<|>|==|!=|<=\s*\w*[)]+$/i
    const patronMain = /^task main+[(\w*\s*)]+$/i
    const patronLlaveInicio = /^\s*{+$/i
    const patronLlaveFin = /^\s*}+$/i
    const patronComentario = /^\s*[//]\w*/i
    const patronCadena = /^\s*var|const \w* = '\w*'+$/i
    const patronInstancia = /\s* a|var|const \w* \s*|= new \w*[(\w*|\d*)]+$/i
    const patronIf = /^\s*if\s[(\w*)]+$/
    const patronElse = /^\s*else+$/
    const patronWhile = /^\s*while\s[(\w*)]+$/
    const patronFunction = /^\s*function \w*\s*[(\w*)]+$/
    const patronTiempo = /^\s*wait1msec\s[(\w*)]+$/
    const patronReservada = /^\s*new|Servo|Relay|Sensor|Motor|return|PI/
    const patronMetodoRun = /^\s*\w*[.]run\s[(\d*\w*)]+$/i
    const patronMetodoOff = /^click|off+$/i
    const patronMetodoPos = /^\s*\w*[.]position\s[(\d*\w*)]+$/i
    const patronMetodoOn = /^click|on+$/i
    const anyFunction = /^\s*\w*\s[(]\w\w*[)]+$/i

    for (let i = 0; i < this.arreglo.length; i++) {

      if (this.Comprobar(this.arreglo[i], patronMain) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo principal", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronLlaveInicio) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Llave inicio", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronLlaveFin) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Llave fin", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronComentario) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Comentario", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronCadena) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Variable", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronIf) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Declaración if", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronWhile) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Estructura de control", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronElse) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Declaración else", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronTiempo) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo tiempo", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronFunction) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Función", 1))
      }

      else if (this.Comprobar(this.arreglo[i], anyFunction) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Función declarada", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronComparacion) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Comparación", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronInstancia) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Instancia", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronMetodoRun) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo run", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronMetodoOff) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo relay", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronMetodoPos) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo posicion", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronMetodoOn) == true) {
        arreglo.push(new ControladorLexico(i + 1, this.arreglo[i], "Metodo relay", 1))
      }

      else if (this.Comprobar(this.arreglo[i], patronReservada) == true) {
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