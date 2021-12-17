const checkInt18 = require("../src/app")
// const isInteger = require("../src/isInteger")
jest.mock('../src/isInteger', (value) => require("../src/__mocks__/isInteger"))


describe("testing CheckInt() ", () => {

    const inputs = [20, 25]
    // isInteger.mockImplementation(value => true)
    
    it.each(inputs)("check number %j", i => expect(checkInt18(i)).toBe(true))
})
