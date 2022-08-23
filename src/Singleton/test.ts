import { DatabaseSingleton } from './DatabaseSingleton';
import { User } from './User';

test('users should be identical', () => {
    const user: User = {
        name: 'John Doe'
    };

    const db1 = new DatabaseSingleton();
    db1.users.push(user);

    const db2 = new DatabaseSingleton();

    expect(db1.users[0].name).toBe('John Doe');
});
