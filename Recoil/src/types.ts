export interface ITodoItem{
    id: number
    text: string,
    isComplete: boolean,
}

export interface IWhales{
    id: string,
    name: string,
    maxLifeSpan: number,
    diet: string,
    favoriteFood: string,
    maxLengthInFt: number,
    description: string
}

export interface IWhalesTypes{
    id: string,
    name: string,
}