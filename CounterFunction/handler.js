
exports.counter = async (event, context) => {

    console.log(`el numero enviado es ${event.pathParameters.id}`)

    console.log('Remaining time: ', context.getRemainingTimeInMillis())
    console.log('Function name: ', context.functionName)
    // agregamos logica basada en el parametro enviado
    // ojo, es una mala practica hacer esto ya que AWS recomienda
    // escribir funciones lambda statless

let res

    if(event.pathParameters.id === "crear"){
      res = "el dato se esta creando"
    } else if (event.pathParameters.id === "actualizar"){
      res = "el dato se esta actualizando"
    } else if (event.pathParameters.id === "eliminar"){
      res = "el dato se esta eliminando"
    }

    return {
        statusCode: 200,
        body: {
            res,
            remT: context.getRemainingTimeInMillis(),
            funN: context.functionName,
            arn: context.invokedFunctionArn
        }
    }
}