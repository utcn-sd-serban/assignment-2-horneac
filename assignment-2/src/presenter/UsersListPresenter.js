import model from "../model/UserModel";

class UsersListPresenter {
    onCreate() {
        model.addUser(model.state.newUser.userName, model.state.newUser.password);
        model.changeNewUserProperty("userName","");
        model.changeNewUserProperty("password","");
    }

    onChange(property, value) {
        model.changeNewUserProperty(property, value);
    }
    onLogin() {
        //eval('debugger');
        for(let index = 0; index < model.state.users.length; index++) {
            if(model.state.users[index].userName === model.state.newUser.userName) {
                if(model.state.users[index].password === model.state.newUser.password) {
                    model.changeCurrentUserProperty("userName",model.state.newUser.userName);
                    window.location.assign("#/questions");
                }
            }
        }
        
    }
}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;