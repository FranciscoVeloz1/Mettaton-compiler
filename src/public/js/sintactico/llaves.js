export default coleccion => {

    let inicio = 0
    let fin = 0
    let result = ''

    coleccion.map(col => {
        if (col.descripcion == 'Llave inicio') {
            inicio++
        } else if (col.descripcion == 'Llave fin') {
            fin++
        }
    })

    if (inicio === fin) {
        result = ''
    } else if (inicio < fin) {
        result = 'Error Sintactico L-001: Faltante { antes del cuerpo\n'
    } else {
        result = 'Error Sintactico L-002: Faltante } después del cuerpo\n'
    }

    return result
}
