import questionModel from "../model/QuestionModel.js"
import model from "../model/UserModel.js";

class QuestionListPresenter {
    onSearchBarChange(tagOrTitle) {
        questionModel.changeTitleOrTagSearch(tagOrTitle);
    }

    onClickNewQuestion(){
        questionModel.addQuestion(questionModel.state.newQuestion.title, questionModel.state.newQuestion.text, model.state.currentUser.userName);
    }

    onChangeNewQuestionProperty(property,value) {
        questionModel.changeNewQuestionProperty(property,value);
    }
    onCreate(){
        questionModel.addQuestion(questionModel.state.newQuestion.title,questionModel.state.newQuestion.text,model.state.currentUser.userName);
    }

    onLogOut() {
        window.location.assign("/");
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;