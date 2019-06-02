import model from "../model/UserModel";
import RestClient from "../rest/RestClient";
import AnswerRestClient from "../rest/AnswerRestClient";

class UsersListPresenter {
    onCreate() {
        model.addUser(
            model.state.newUser.userName,
            model.state.newUser.password
        );
        model.changeNewUserProperty("userName", "");
        model.changeNewUserProperty("password", "");
    }

    onChange(property, value) {
        model.changeNewUserProperty(property, value);
    }
    onLogin() {
        //eval('debugger');
        model.state.client = new RestClient(
            model.state.newUser.userName,
            model.state.newUser.password
        );
        model.state.answerClient = new AnswerRestClient(
            model.state.newUser.userName,
            model.state.newUser.password
        );
        if (model.state.newUser.userName !== "") {
            window.location.assign("#/questions");
        }
    }
}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;
