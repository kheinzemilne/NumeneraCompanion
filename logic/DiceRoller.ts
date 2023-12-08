export default class DiceRoller {
    constructor(){}

    rollDice(dieType: number, numDice: number): number {
        const min: number = Math.ceil(numDice);
        const max: number = Math.floor(dieType*numDice);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}