import { User } from './User';

export class DatabaseSingleton {
    private static _instance: DatabaseSingleton;
    public users: User[] = [];

    constructor() {
        if (DatabaseSingleton._instance) {
            return DatabaseSingleton._instance;
        }

        DatabaseSingleton._instance = this;
    }
}
