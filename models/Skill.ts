import Realm, {ObjectSchema} from 'realm';

export default class Skill extends Realm.Object<Skill> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    proficiencyLevel?: number;

    static schema: ObjectSchema = {
        name: 'Skill',
        properties: {
            _id: 'objectId',
            name: 'string',
            proficiencyLevel: { type: 'int', default: 1 }
        },
        primaryKey: '_id'
    };
}