import model from "../model/UserModel.js";
import answerModel from "../model/AnswerModel.js";

class QuestionDetailsPresenter {
    onChangeNewAnswerProperty(property, value) {
        answerModel.changeNewAnswerProperty(property, value);
    }
    onCreate() {
        answerModel.addAnswer(
            model.state.newUser.userName,
            answerModel.state.newAnswer.text,
            answerModel.state.question.id
        );
        answerModel.changeNewAnswerProperty("text", "");
    }

    onEditAnswer(id) {
        console.log("answer" + id);
        answerModel.changeSelectedAnswer(id);
    }

    onCancel() {
        console.log("closing modal");
        answerModel.changeSelectedAnswer(null);
    }

    onLogOut() {
        model.changeCurrentUserProperty("userName", "");
        window.location.assign("/");
    }

    onClick(question) {
        model.changeCurrentUserProperty("userName", "");
        window.location.assign("#/question/" + question.id);
    }

    onDelete(id) {
        answerModel.delete(id);
    }

    onUpdateAnswer(answer) {
        answerModel.updateAnswer(
            answer.id,
            model.state.newUser.userName,
            answerModel.state.newAnswer.text,
            answer.questionId,
            answer.creation_date_time
        );
    }
}

const questionDetailsPresenter = new QuestionDetailsPresenter();

export default questionDetailsPresenter;
