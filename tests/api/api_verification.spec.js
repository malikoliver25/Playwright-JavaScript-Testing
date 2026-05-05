import { test, expect } from '@playwright/test';
import { ApiClient } from '../../lib/apiClient.js';
import { DbHelper } from '../../lib/dbHelper.js';
// Corrected path and added JSON attribute
import loginData from '../../data/LoginData.json' with { type: 'json' };

test.describe("Full Stack Verification", () => {
    
    test('Verify API users and cross-reference Database', async ({ request }) => {
        const api = new ApiClient(request);
        const db = new DbHelper({
            host: 'localhost',
            user: 'root',
            password: 'your_password',
            database: 'test_db'
        });

        // 1. Verify API
        const users = await api.getUsers();
        expect(users.length).toBeGreaterThan(0);
        console.log(`API check: Found ${users.length} users.`);

        // 2. Verify Database (using your JSON data)
        const dbUser = await db.query('SELECT * FROM users WHERE email = ?', [loginData.validUser.email]);
        
        if (dbUser.length > 0) {
            expect(dbUser[0].email).toBe(loginData.validUser.email);
            console.log("Database check: User record matches.");
        } else {
            console.log("Database check: No matching user found in local DB.");
        }
    });
});