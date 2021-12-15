const checkInt = require("../src/app")

describe("testing CheckInt() ", () => {
    const inputs = [15, 2, '2']
    it.each(inputs)("check number %j", i => expect(checkInt(i)).toBe(true))
})
