import React, { Component} from "react";
import questionModel from "../model/QuestionModel.js";
import QuestionList from "./QuestionList.js";
import questionListPresenter from "../presenter/QuestionListPresenter.js";


const mapModelStateToComponentState = (modelState) => ({
    questions: modelState.questions,
    newQuestion: modelState.newQuestion,
})

export default class SmartQuestionList extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(questionModel.state);
        this.state.questions.sort( (q1, q2) => (
            q1.creation_date_time < q2.creation_date_time ? 1 : q1.creation_date_time > q2.creation_date_time ? -1 : 0
        ))
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        questionModel.addListener("change",this.listener);

    }

    ccomponentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionList title="Questions"
            onSearchBarChange={questionListPresenter.onSearchBarChange}
            onChangeNewQuestionProperty={questionListPresenter.onChangeNewQuestionProperty}
            onClickNewQuestion={questionListPresenter.onCreate}
            onSearchTitle={questionListPresenter.onClickSearchTitle}
            onSearchTag={questionListPresenter.onClickSearchTag}
            questions={this.state.questions}
            onLogOut={questionListPresenter.onLogOut}
            newQuestion={this.state.newQuestion}/>
        )
    }
}