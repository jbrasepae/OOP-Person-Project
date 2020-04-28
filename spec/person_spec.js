const {Person} = require("../src/person.js")

let person = new Person ('Ryan', 30, 'male', ['being a hardarse', ' agile', ' ssd hard drives.'])
let greeting = person.hello()

describe("Person", function(){
    it("should output greeting", function(){
        expect(greeting).toBe('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile, ssd hard drives.')
    })
})
