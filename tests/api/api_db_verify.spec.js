import { test, expect } from '@playwright/test';
import { DbHelper } from '../../lib/dbHelper.js';

test('Verify Database User matches API', async ({ request }) => {
    // 1. Setup your DB connection info
    const db = new DbHelper({
        host: 'localhost',
        user: 'root',
        password: 'your_password',
        database: 'test_db'
    });

    // 2. Run a query
    const dbUser = await db.query('SELECT name FROM users WHERE id = ?', [1]);

    // 3. Assert the result
    expect(dbUser[0].name).toBe('Leanne Graham');
    console.log(`Database confirmed user: ${dbUser[0].name}`);
});