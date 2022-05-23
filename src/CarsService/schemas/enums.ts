
/**
 * inService       = Actualmente en el taller
 * inRecentList    = 60 dias posterior a la entrega del auto
 * inActiveClients = 61 a 180 dias posterior a la entrega del auto
 * inArchived      = Pasado 181 dias de la ultima entrega 
 */
export enum availableOptsEnum {
    working = 'working',
    withdraw = 'withdraw',
    delivered = 'delivered',
    archived = 'archived'
}

export const optToCheck = [
    availableOptsEnum.working,
    availableOptsEnum.delivered,
    availableOptsEnum.withdraw,
    availableOptsEnum.archived
]

export enum CarColors {
    black = 'negro', 
    white ='blanco', 
    gray = 'gris', 
    red = 'rojo'
}

export const colors = [
    CarColors.black,
    CarColors.white,
    CarColors.gray,
    CarColors.red
]

export enum CarProperties {
    _id = '_id',
    brand = 'brand',
    year = 'year',
    patent = 'patent',
    color = 'color',
    owner = 'owner',
    state = 'state',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt'
}

export const CarArrayProperties = [
    CarProperties._id,
    CarProperties.brand,
    CarProperties.year,
    CarProperties.patent,
    CarProperties.color,
    CarProperties.owner,
    CarProperties.state,
    CarProperties.createdAt,
    CarProperties.updatedAt,
]

