const request = require('supertest');

describe('get Endpoints', () => {
	const server = request(`http://localhost:3005`);
	test('should run get example', async () => {
		const res = await server.get('/example');
		expect(res.statusCode).toEqual(200);
		expect(res.body.message).toEqual('Go Serverless v1.0! Your function executed successfully!');
	});
});
