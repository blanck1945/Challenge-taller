class ErrorService {
  getErrorMsg(code: number) {
    switch (code) {
      case 15974:
        return 'Valor en una de las querys(sort - order - limit) no valido';
      default:
        return 'Error al ejecutar la busqueda en la DB';
    }
  }

  getErrorType(err) {
    const shareProps = {
      mongoCode: err.code,
      statusCode: 500,
      internalCode: 'Express controller - expressWrapper - XXV223S',
    };
    if (err.name === 'MongoError') {
      return {
        id: 'Error de Mongo',
        mongoMessage: err.message,
        message: this.getErrorMsg(err.code),
        ...shareProps,
      };
    }

    return {
      id: 'Error General',
      message: err.message,
      ...shareProps,
    };
  }
}

export default new ErrorService();
