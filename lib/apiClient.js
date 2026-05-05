export class ApiClient {
    constructor(request) {
        this.request = request;
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    async getUsers() {
        const response = await this.request.get(`${this.baseUrl}/users`);
        return await response.json(); 
    }

    async createUser(payload) {
        return await this.request.post(`${this.baseUrl}/users`, {
            data: payload
        });
    }
}