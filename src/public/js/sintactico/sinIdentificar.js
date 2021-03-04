export default coleccion => {
    let result = ''
    let instruction = coleccion.filter(inst => inst.descripcion == 'No identificado')

    if (instruction.length > 0) {
        result = 'Error Sintactico X-001: Instruccion no identificada'
    } else {
        result = ''
    }

    return result
}