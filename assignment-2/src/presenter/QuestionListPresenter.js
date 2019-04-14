import questionModel from "../model/QuestionModel.js"
import model from "../model/UserModel.js";

class QuestionListPresenter {
    onSearchBarChange(tagOrTitle) {
        questionModel.changeTitleOrTagSearch(tagOrTitle);
    }

    onClickSearchTitle() {
        // questionModel.state.questions.filter( (question, index, arr) => (
        //     question.title.includes(questionModel.state)
        // ))
        let questionList = questionModel.state.questions.filter((question, index, arr) => (
            question.title.includes(questionModel.state.searchTagOrTitle)
        ))
        console.log("search criteria:" + questionModel.state.searchTagOrTitle);
        console.log("questions before filter");
        console.log(questionModel.state.questions);
        console.log("filtered:");
        console.log(questionList);
        questionModel.updateQuestions(questionList);
        console.log("questions after search:");
        console.log(questionModel.state.questions);

        // questionModel.filter( (question, index, arr) => (
        //          question.title.includes(questionModel.state.searchTagOrTitle)
        //      ) )
        // questionModel.state.questions.map( (question, index) => (
        //     question.title.includes(questionModel.state.searchTagOrTitle) === false ? questionModel.removeQuestion(index) : null 
        // ))
    }

    onClickSearchTag() {
        let questionList = questionModel.state.questions.filter( (question, index, arr) => (
            question.tags.includes(questionModel.state.searchTagOrTitle)
        ))
        questionModel.updateQuestions(questionList);
    }

    onChangeNewQuestionProperty(property,value) {
        questionModel.changeNewQuestionProperty(property,value);
    }
    onCreate(){
        questionModel.addQuestion(questionModel.state.newQuestion.title,questionModel.state.newQuestion.text,model.state.currentUser.userName, questionModel.state.newQuestion.tags);
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("tags", "");
        
    }

    onLogOut() {
        window.location.assign("/");
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;