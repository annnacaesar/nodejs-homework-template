
/*
відповідь повина мати статус-код 200
у відповіді повинен повертатися токен
у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String
*/

// const mongoose  = require('mongoose');
// const login = require('./login');
// const request = require('supertest');
// require('dotenv').config();

// const app = require('../../app')
// // const User = require('../../models/user');

// const {PORT, DB_HOST} = process.env;

// describe('test login controller', ()=>{
	// 	let server;
	// 	beforeAll(()=> {server = app.listen(PORT)}); 
	
	//   afterAll(() => server.close()); 
	
	// 	beforeEach((done)=> {
		// 		mongoose.connect(DB_HOST_TEST).then(()=> done())
		// })
		
		// afterEach((done)=> {
			// 	mongoose.connection.db.dropCollection(()=> {
				// 			mongoose.connection.close(()=> done())
				// 	})
				// })

// describe('Login', () => {

// 		let server;
// 		beforeAll(()=> {server = app.listen(PORT)}); 
	
// 	  afterAll(() => server.close()); 
	
// 		beforeEach((done)=> {
// 				mongoose.connect(DB_HOST).then(()=> done())
// 		})
		
// 		afterEach((done)=> {
// 				mongoose.connection.db.dropCollection(()=> {
// 							mongoose.connection.close(()=> done())
// 				})
// 			})

// 	test('User should login with correct creds', () => {
// 		// const next = jest.fn();
// 		const req = {
// 			body: {
// 				email: "anna6@i.ua",
// 				password: "1234567"
// 					}
// 			};

// 			const res = {
// 					status: jest.fn().mockReturnThis(),
// 					json: jest.fn((data) => data),
// 			};

			// authService.loginUser = jest.fn(() => {
			// 		return {
			// 				token: 'test-jwt-token'
			// 		}
			// });

// 			const result = login(req, res);
// 			console.log(result);

// 			expect(result.code).toBe(200);
// 			// expect(result.data.token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGYwNjZhN2RlNGJmNTZhYThjZWY0NSIsImlhdCI6MTY2NjEyMzM3OSwiZXhwIjoxNjY2MTU5Mzc5fQ.9npvWa0IpdWuo0Axkc60rvOTCOejjrJTMcQAy687GHQ');
// 	});
// })


// test("test login controller", async()=> {
// 	const newUser = {
// 			email: " anna2@gmail.com",
// 			password: "123456"
// 	};

// 	const user = await User.create(newUser);

// 	console.log(user);

	/*
	1. Проверить правильность получаемого ответа на 
	AJAX-запрос документации
	2. Проверить что в базу записался нужный элемент.
	*/

	// const loginUser = {
	// 		email: "anna1@gmail.com",
	// 		password: "123456"
	// };

	// const response = await request(app).post("/api/auth/login").send(loginUser);
	// expect(response.statusCode).toBe(200);
	// const {body} = response;
	// expect(body.token).toByTruthy();
	// const {token} = await User.findById(user._id);
	// expect(body.token).toBe(token);
	
// })

  // test('login returns object user', async() => {
  //   const userTest = {email: "anna3@i.ua", password: "1234567"}
  //   const response = await request(app).post('/api/users/login').send(userTest);
  //   console.log(response);

  //   expect(response.body).toEqual({token: '',
  // user: {
  //   email: "",
  //   description: ""
  // }})
    // expect(Object.isObject(response.body)).toBe(true)
    // const {token, user} = response.body;
    // expect(token).toBe(true);
    // expect(typeof user.email).toBe(String)
    // expect(typeof user.subscroption).toBe(String)
  // })

  // })
  


	
	// const {DB_TEST_HOST, PORT} = process.env;
	
	// describe("test auth routes", ()=> {
	// 		let server;
	// 		beforeAll(()=> server = app.listen(PORT));
	// 		afterAll(()=> server.close());
	
			// beforeEach((done)=> {
			// 		mongoose.connect(DB_TEST_HOST).then(()=> done())
			// })
	
			// afterEach((done)=> {
			// 		mongoose.connection.db.dropCollection(()=> {
			// 				mongoose.connection.close(()=> done())
			// 		})
			// })
	
			// test("test login route", async()=> {
			// 		const newUser = {
			// 				email: "bogdan@gmail.com",
			// 				password: "123456"
			// 		};
	
			// 		const user = await User.create(newUser);
	
			// 		/*
			// 		1. Проверить правильность получаемого ответа на 
			// 		AJAX-запрос документации
			// 		2. Проверить что в базу записался нужный элемент.
			// 		*/
	
			// 		const loginUser = {
			// 				email: "bogdan@gmail.com",
			// 				password: "123456"
			// 		};
	
			// 		const response = await request(app).post("/api/auth/login").send(loginUser);
			// 		expect(response.statusCode).toBe(200);
			// 		const {body} = response;
			// 		expect(body.token).toByTruthy();
			// 		const {token} = await User.findById(user._id);
			// 		expect(body.token).toBe(token);
					
			// })
	// })

