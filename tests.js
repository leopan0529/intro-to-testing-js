// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});





describe('sayHello',function (){
    it('should be a defined function',function (){
        expect( typeof sayHello).toBe('function')
    })
})

describe('sayHello',function () {
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string")
    });
})



describe("sayHello",function (){
    it(`should return the string Hello,Jane!`,function (){
        expect(sayHello("Jane")).toBe(`Hello,Jane!`)

    })
})

describe('sayHello',function (){
    it('should return the string Hello, Alex',function (){
        expect(sayHello("Alex")).toBe("Hello,Alex!")
    })
})



describe('sayHello',function (){
    it('should return the string Hello, Pat!',function (){
        expect(sayHello("Pat")).toBe("Hello,Pat!")
    })
})


describe('sayHello',function (){
    it("should return the string Hello, World",function (){
        expect(sayHello()).toBe("Hello, World")
    })
})


describe('sayHello',function (){
    it("should return the string Hello, World",function (){
        expect(sayHello(true)).toBe("Hello, World")
    })
})


describe('sayHello',function (){
    it("should return the string Hello, World",function (){
        expect(sayHello(false)).toBe("Hello, World")
    })
})

describe("isFive",function (){
    it("should be a defined function",function (){
        expect(typeof isFive).toBe("function")
    })
})



describe("isFive",function (){
    it("should return a boolean",function (){
        expect(typeof isFive()).toBe("boolean")
    })
})


describe("isEven", function (){
    it("should be a defined function",function (){
        expect(typeof isFive).toBe("function")
    })
})



describe("isEven",function (){
    it("should return a boolean",function (){
        expect(typeof isEven()).toBe("boolean")
    })
})


describe("isVowel", function (){
    it("should be a defined function",function (){
        expect(typeof isVowel).toBe("function")
    })
})


describe("isVowel",function (){
    it("should return a boolean",function (){
        expect(typeof isVowel()).toBe("boolean")
    })
})


describe("add", function (){
    it("should be a defined function",function (){
        expect(typeof add).toBe("function")
    })
})


describe("add", function () {
    it('should return a number when called', function () {
        expect(typeof add()).toBe("number")
    })
})










