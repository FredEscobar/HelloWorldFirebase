import { HelloWorldService } from './HelloWorldService';

describe('HelloWorldService', ()=> {
    let helloWorldService: HelloWorldService;
    let greeting = "Hello from testing";
    let defaultGreeting = "Hello world from HelloWorldService"

    beforeEach(()=>{
        helloWorldService = new HelloWorldService(greeting);
    });

    describe('sayHi', ()=> {
        it('should return a string', ()=> {
            expect(typeof helloWorldService.sayHi()).toBe('string');
        });

        it(`should return ${greeting}`, ()=> {
            expect(helloWorldService.sayHi()).toBe(greeting);
        })

        it(`should return ${defaultGreeting} when empty greeting is passed as parameter`, () => {
            helloWorldService = new HelloWorldService(undefined);
            expect(helloWorldService.sayHi()).toBe(defaultGreeting);
        });
    });

});



