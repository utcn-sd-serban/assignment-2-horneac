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
                creation_date_time: 2019,
                tags: ["first", "tag"]
            }, {
                id: 2,
                title: "title2",
                text: "text2",
                author: "Jack",
                creation_date_time: 2018,
                tags: ["second", "tag"]
            }],
            newQuestion: {
                title: "",
                text: "",
                tags: ""
            },
            searchTagOrTitle: "",
            currentId: 3
        };
    }

    addQuestion(title,text, author, tags){
        let tagsArray = tags.split(" ");
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                id: this.state.currentId,
                title: title,
                text: text,
                author: author,
                creation_date_time: 2019,
                tags: tagsArray
            }]),
            currentId: this.state.currentId+1
        };
        
        this.emit("change",this.state);
    }
    removeQuestion(index) {
        this.state = {
            ...this.state
        }
        this.state.questions.splice(index,1);
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value)  {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property] : value
            }
        };
        this.emit("change",this.state);
    }

    filter(filterFun) {
        this.state = {
            ...this.state,
            questions: this.state.questions.filter(filterFun)
            
        }
        console.log(this.state.questions);
        this.emit("change",this.state);
    }

    updateQuestions(questions) {
        this.state = {
            ...this.state,
            questions: questions
        }
        this.emit("change", this.state);
    }

    changeTitleOrTagSearch(tagOrTitle) {
        this.state = {
            ...this.state,
            searchTagOrTitle: tagOrTitle
        }
        console.log("new search criteria:" + this.state.searchTagOrTitle);
        this.emit("change",this.state);
    }

}

const questionModel = new QuestionModel();

export default questionModel;