const TodoList = require("./TodoList")
// @ponicode
describe("addTask", () => {
    let inst

    beforeEach(() => {
        inst = new TodoList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addTask("dummyname")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addTask("dummyName")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addTask("dummyName123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addTask("DUMMYNAME")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addTask("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addTask(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateTotal", () => {
    let inst

    beforeEach(() => {
        inst = new TodoList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.updateTotal({ id: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.updateTotal({ id: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.updateTotal({ id: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.updateTotal({ id: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.updateTotal({ id: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.updateTotal({ id: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new TodoList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
