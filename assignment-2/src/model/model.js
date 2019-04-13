import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{
                id: 1,
                userName: "John",
                password: "123456",
                banned: false,
                type:"user",
                score: 0
            }, {
                id: 1,
                userName: "Jack",
                password: "123456",
                banned: false,
                type:"user",
                score: 0
            }],
            newUser: {
                userName:"",
                password:""
            }

        };
    }

    addUser(userName, password) {
        this.state = {
            ...this.state,
            users: this.state.users.concat([{
                userName : userName,
                password : password
            }]) 
        };
        this.emit("change", this.state);
    }

    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

}

const model = new Model()

export default model;