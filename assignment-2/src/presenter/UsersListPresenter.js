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
        model.changeCurrentUserProperty("username",model.state.newUser.userName);
        window.location.assign("#/questions");
    }
}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;