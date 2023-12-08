import Difficulties from "../data/Difficulties";
import DiceRoller from "./DiceRoller";

export default class TaskResolver {
    private difficulties: Difficulties = new Difficulties();

    constructor(){}

    attemptTask(difficulty: number) {
        const roll: number = new DiceRoller().rollDice(20, 1);
        const result: {title: string, body: string, special: string|null} = this.generateResolution(roll, this.difficulties.getDifficulty(difficulty));

        return result;
    }    

    generateResolution(roll: number, difficulty: {key: number, value: string}): {title: string, body: string, special: string|null} {
        let title: string = this.getResultTitle(roll, difficulty);
        let body: string = this.getResultBody(roll, difficulty.key);
        let special: string|null = this.checkSpecialResults(roll, roll >= difficulty.key * 3);

        return {title, body, special};
    }

    getResultTitle(roll: number, difficulty: {key: number, value: string}): string {
        if (roll >= difficulty.key * 3) {
            return `Your ${difficulty.value} Task Succeeds!`;
        } else {
            return `Your ${difficulty.value} Task Has Failed...`;
        }
    }

    getResultBody(roll: number, diffNum: number): string {
        return `Roll of ${roll} vs Target Number ${diffNum * 3}`;
    }

    checkSpecialResults(roll: number, success: boolean): string|null {
        let result: string|null = null;

        switch(roll) {
            case 1: {
                if(!success)
                    result = "A GM intrusion occurs! You may spend 1 XP to negate it.";
                break;
            }
            case 17: {
                if(success)
                    result = "+1 damage on this task."
                break;
            }
            case 18: {
                if(success)
                    result = "+2 damage on this task."
                break;
            }
            case 19: {
                if(success)
                    result = "A minor effect occurs! If this is a combat task, you may add +3 damage instead."
                break;
            }
            case 20: {
                if(success)
                    result = "A major effect occurs! If this is a combat task, you may add +4 damage instead. Refund all pool spent on this task."
                break;
            }
        }
        return result;
    }
}