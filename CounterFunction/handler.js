
exports.counter = async (event) => {

    console.log(`el numero enviado es ${event.pathParameters.id}`)
    // agregamos logica basada en el parametro enviado
    // ojo, es una mala practica hacer esto ya que AWS recomienda
    // escribir funciones lambda statless

let res
    if(!isNaN(event.pathParameters.id)) {

        let num = Number(event.pathParameters.id) + 1000
        return {
            statusCode: 200,
            body: `el id es el numero ${num}`
        }
    }
    if(event.pathParameters.id === "crear"){
      res = "el dato se esta creando"
    } else if (event.pathParameters.id === "actualizar"){
      res = "el dato se esta actualizando"
    } else if (event.pathParameters.id === "eliminar"){
      res = "el dato se esta eliminando"
    }

    return {
        statusCode: 200,
        body: `*** ${res} ***`
    }
}