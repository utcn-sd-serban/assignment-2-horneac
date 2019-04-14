import {EventEmitter} from "events"

class QuestionModel extends EventEmitter{
    constructor() {
        super();
        this.state = {
            questions: [{
                id: 1,
                title: "title1",
                text: "text1",
                author: "John",
                creation_date_time: 2019
            }, {
                id: 2,
                title: "title2",
                text: "text2",
                author: "Jack",
                creation_date_time: 2018
            }],
            newQuestion: {
                title: "",
                text: "",
                author: "",
                tags: []
            },
            searchTagOrTitle: "",
            id: 2
        };
    }

    addQuestion(title,text, author){
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                id: this.state.id,
                title: title,
                text: text,
                author: author,
                creation_date_time: 2019
            }]),
            id: this.state.id+1
        };
        
        this.emit("change",this.state);
    }

    changeNewQuestionProperty(property, value)  {
        this.state = {
            ...this.state,
            newQuestion: {
                
                ...this.newQuestion,
                [property] : value
            }
        };
        this.emit("change",this.state);
    }

    changeTitleOrTagSearch(tagOrTitle) {
        this.stat = {
            ...this.state,
            searchTagOrTitle: tagOrTitle
        }
        this.emit("change",this.state);
    }

}

const questionModel = new QuestionModel();

export default questionModel;