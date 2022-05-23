export enum ControllerEnums {
    ordersController = 'Order Controller',
    clientsController = 'Clients Controller',
    carsController = 'Car Controller',
    TransactionController = 'TransactionController'
}

export enum ValidationSchemas {
    ordersSchema = 'ordersSchema',
    CREATE_clientsSchema = 'clientsSchema',
    UPDATE_clientsSchema = 'UPDATE_clientsSchema',
    CREATE_carsSchema = 'carsSchema',
    UPDATE_CarSchema = 'UpdateCarSchema',
    CREATE_transactionSchema = 'CREATE_transactionSchema'
}

export enum ErrorEnums {
    ERROR = "error",
    WARN = "warn",
    SUCCESS = "success",
}

export enum CarColors {
    negro = 'negro', 
    blanco ='blanco', 
    gris = 'gris', 
    rojo = 'rojo'
}

export enum ValidationServiceProperties {
    colors = 'colors'
}

export enum Models {
    Car = 'Car',
    Client = 'Client',
    Transaction = 'Transaction'
}

export enum lifeCicles {
    endSuccess = 'end-success',
    failedError = 'failed-error'
}