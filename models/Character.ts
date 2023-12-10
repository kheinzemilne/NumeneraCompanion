import React from 'react';
import Realm, {ObjectSchema} from 'realm';
import { createRealmContext } from '@realm/react'
import Skill from './Skill';
import Ability from './Ability';

export default class Character extends Realm.Object<Character> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    maxHp!: number;
    currentHp!: number;
    abilities!: Array<Ability>;
    skills!: Array<Skill>;

    static schema: ObjectSchema = {
        name: 'Character',
        properties: {
            _id: 'objectId',
            name: 'string',
            maxHp: 'int',
            currentHp: 'int',
            abilities: 'Array<Ability>',
            skills: 'Array<Skill>'
        },
        primaryKey: '_id'
    };
}