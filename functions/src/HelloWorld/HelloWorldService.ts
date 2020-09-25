export class HelloWorldService{

    /**
     *
     */
    constructor(private greeting?:string) {


    }

    public sayHi(): string {
        var a=1, b=2;
        var result = a != b;
        console.log(result);
        return this.greeting??"Hello world from HelloWorldService"
    }
}
