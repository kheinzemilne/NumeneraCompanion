export default class Difficulties {
    constructor(){}

    private difficulties = [
        {key: 0, value: 'Routine'},
        {key: 1, value: 'Simple'},
        {key: 2, value: 'Standard'},
        {key: 3, value: 'Demanding'},
        {key: 4, value: 'Difficult'},
        {key: 5, value: 'Challenging'},
        {key: 6, value: 'Intimidating'},
        {key: 7, value: 'Formidable'},
        {key: 8, value: 'Heroic'},
        {key: 9, value: 'Immortal'},
        {key: 10, value: 'Impossible'}
    ];

    getDifficulty(key: number): {key: number, value: string} {
        return this.difficulties[key];
    }

    getDifficultyList(): {key: number, value: string}[] {
        return this.difficulties;
    }
}