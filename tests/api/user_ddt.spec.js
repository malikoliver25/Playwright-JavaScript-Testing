import { test, expect } from '@playwright/test';
import { ApiClient } from '../../lib/apiClient.js';
import data from '../../data/UserValidation.json';

test.describe('API Data Driven Suite', () => {

  // Loop 1: GET Requests
  for (const user of data.testUsers) {
    test(`Verify User ID: ${user.id}`, async ({ request }) => {
      const api = new ApiClient(request);
      const response = await api.getUser(user.id);
      
      expect(response.status()).toBe(user.expectedStatus);

      if (user.expectedStatus === 200) {
        const body = await response.json();
        expect(body.name).toBe(user.expectedName);
      }
    });
  }

  // Loop 2: POST Requests
  for (const user of data.newUsers) {
    test(`${user.testName}`, async ({ request }) => {
      const api = new ApiClient(request);
      const response = await api.createUser(user.payload);

      expect(response.status()).toBe(user.expectedStatus);

      if (user.expectedStatus === 201) {
        const body = await response.json();
        expect(body.name).toBe(user.payload.name);
        console.log(`Success: Created ${body.name} with ID: ${body.id}`);
      }
    });
  }
});