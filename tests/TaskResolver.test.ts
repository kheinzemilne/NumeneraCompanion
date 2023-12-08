import {expect, describe, test} from '@jest/globals';
import TaskResolver from '../logic/TaskResolver';

const TASK_RESOLVER = new TaskResolver;


describe("checkSpecialResults", () => {
    test('1, false should be "A GM intrusion occurs! You may spend 1 XP to negate it."', () => {
        expect(TASK_RESOLVER.checkSpecialResults(1, false)).toBe("A GM intrusion occurs! You may spend 1 XP to negate it.");
    });

    test('1, true should be null', () => {
        expect(TASK_RESOLVER.checkSpecialResults(1, true)).toBeNull();
    });

    test('17, true should be "+1 damage on this task."', () => {
        expect(TASK_RESOLVER.checkSpecialResults(17, true)).toBe("+1 damage on this task.");
    });

    test('17, false should be null', () => {
        expect(TASK_RESOLVER.checkSpecialResults(17, false)).toBeNull();
    });

    test('18, true should be "+2 damage on this task."', () => {
        expect(TASK_RESOLVER.checkSpecialResults(18, true)).toBe("+2 damage on this task.");
    });

    test('18, false should be null', () => {
        expect(TASK_RESOLVER.checkSpecialResults(18, false)).toBeNull();
    });

    test('19, true should be "A minor effect occurs! If this is a combat task, you may add +3 damage instead."', () => {
        expect(TASK_RESOLVER.checkSpecialResults(19, true)).toBe("A minor effect occurs! If this is a combat task, you may add +3 damage instead.");
    });

    test('19, false should be null', () => {
        expect(TASK_RESOLVER.checkSpecialResults(19, false)).toBeNull();
    });

    test('20, true should be "A major effect occurs! If this is a combat task, you may add +4 damage instead. Refund all pool spent on this task."', () => {
        expect(TASK_RESOLVER.checkSpecialResults(20, true)).toBe("A major effect occurs! If this is a combat task, you may add +4 damage instead. Refund all pool spent on this task.");
    });

    test('20, false should be null', () => {
        expect(TASK_RESOLVER.checkSpecialResults(20, false)).toBeNull();
    });
});

describe("getResultTitle", () => {
    test("1, {key: 0, value: 'Routine'} should be 'Your Routine Task Succeeds!'", () => {
        expect(TASK_RESOLVER.getResultTitle(1, {key: 0, value: 'Routine'})).toBe("Your Routine Task Succeeds!");
    });

    test("1, {key: 10, value: 'Impossible'} should be 'Your Impossible Task Has Failed...'", () => {
        expect(TASK_RESOLVER.getResultTitle(1, {key: 10, value: 'Impossible'})).toBe("Your Impossible Task Has Failed...");
    });
});

describe("getResultBody", () => {
    test("1, 0 should be Roll of 1 vs Target Number 0", () => {
        expect(TASK_RESOLVER.getResultBody(1, 0)).toBe("Roll of 1 vs Target Number 0");
    });

    test("1, 3 should be Roll of 1 vs Target Number 9", () => {
        expect(TASK_RESOLVER.getResultBody(1, 3)).toBe("Roll of 1 vs Target Number 9");
    });

    test("20, 10 should be Roll of 20 vs Target Number 30", () => {
        expect(TASK_RESOLVER.getResultBody(20, 10)).toBe("Roll of 20 vs Target Number 30");
    });
});