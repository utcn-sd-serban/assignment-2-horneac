import model from "../model/model";

class UsersListPresenter {
    onCreate(userName, password) {
        model.addUser(model.state.newUser.userName, model.state.newUser.password);
        model.changeNewUserProperty("userName","");
        model.changeNewUserProperty("password","");
    }

    onChange(property, value) {
        model.changeNewUserProperty(property, value);
    }
}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;