const {Person} = require("../src/person.js")

let person = new Person ('Ryan', 30, 'male', ['being a hardarse', ' agile', ' ssd hard drives.'])

describe('Person', function(){
    it('should show Ryan as a name', function(){
        expect(person.name).toBe('Ryan')
    })
    it('should show Person age 30', function(){
        expect(person.age).toBe(30)
    })
    it('should show Person gender', function(){
        expect(person.gender).toBe('male')
    })
    it('should show Person interests', function(){
        expect(person.interests).toEqual(['being a hardarse', ' agile', ' ssd hard drives.'])
    })

    it("should say hello", function(){
        expect(person.hello()).toBe('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.')
    })       
})
   