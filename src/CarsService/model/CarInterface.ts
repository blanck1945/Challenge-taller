import { availableOptsEnum, CarColors } from "../schemas/enums";

export interface CarInterface {
    brand: string;
    model: string;
    year: number;
    patent: string;
    color: CarColors;
    state: availableOptsEnum | {};
    owner: string
}