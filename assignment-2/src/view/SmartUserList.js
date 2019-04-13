import React, { Component } from "react"
import UserList from "./UserList.js";
import model from "../model/model.js";
import usersListPresenter from "../presenter/UsersListPresenter.js";
const mapModelStateToComponentState = (modelState) => ({
    users: modelState.users,
    userName: modelState.newUser.userName,
    password: modelState.newUser.password

});

export default class SmartUserList extends Component{
    constructor() {
        super();
        debugger;
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }



    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
       return (
        <UserList 
            onCreate={usersListPresenter.onCreate}
            onChange={usersListPresenter.onChange}
            newUserName={this.state.userName}       //the newUserName parameter of the dumb component is just a refference to this.userName and when this.userName changes the dumb component refreshes? 
            newUserPassword={this.state.password}
            users={this.state.users} />
       );
    }

}