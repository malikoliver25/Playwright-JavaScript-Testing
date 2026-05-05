import mysql from 'mysql2/promise';
// Updated with the required 'with' attribute for ES Modules
import userData from '../data/UserValidation.json' with { type: 'json' };

export class DbHelper {
    constructor(config) {
        this.config = config;
    }

    async query(sql, params) {
        // Creates a connection, executes the query, and closes it
        const connection = await mysql.createConnection(this.config);
        const [results] = await connection.execute(sql, params);
        await connection.end();
        return results;
    }

    // Helper to get expected data from your JSON
    getExpectedUser() {
        return userData;
    }
}