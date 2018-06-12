 describe("Login unit test", ()=>{

 	it('Login must be defined', ()=>{
 			expect(Login).toBeDefined();
 	
 	});

 	it('should pass given valid email and password', ()=>{
 		
		expect(Login('test', 'test')).toEqual('Successful Login');
	});
   it('should pass given invalid email and password', ()=>{
 		
		expect(Login('test1', 'test')).toEqual('Please enter valid email and password');
	});
	
  })
 	
 	// it(`Login must be valid`, ()=>{
 	// 	expect(Login('email')).toEqual(ture);
 	// });

