import Realm, {ObjectSchema} from 'realm';

export default class Ability extends Realm.Object<Ability> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    maxPool!: number;
    currentPool!: number;
    edge!: number;

    static schema: ObjectSchema = {
        name: 'Ability',
        properties: {
            _id: 'objectId',
            name: 'string',
            maxPool: 'int',
            currentPool: 'int',
            edge: {type: 'int', default: 0}
        },
        primaryKey: '_id'
    };
}