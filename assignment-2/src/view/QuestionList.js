import React from "react"
import QuestionSearchBar from "./question/QuestionSearchBar";
import QuestionButtons from "./question/QuestionButtons";

const QuestionList = ({questions,onSearchTitle, newQuestion, 
    onChangeNewQuestionProperty, onLogOut,
    onSearchTag, tagOrTitle, onSearchBarChange, onClickNewQuestion}) => (
    <div className="hero-primary">
        {/* <!-- Main container --> */}
        <nav className="level">
        {/* <!-- Left side --> */}
        <QuestionSearchBar onSearchTitle={onSearchTitle}
                           onSearchTag={onSearchTag}
                           tagOrTitle={tagOrTitle}
                           onSearchBarChange={onSearchBarChange}/>
       

        {/* <!-- Right side --> */}
        <QuestionButtons    newQuestion={newQuestion} 
                            onChangeNewQuestionProperty={onChangeNewQuestionProperty}
                            onLogOut={onLogOut}
                            onClickNewQuestion={onClickNewQuestion} />
        
            {/* <div className="dropdown">
                <p className="level-item"><button className="button is-success" onClick={onClickNewQuestion}>New</button></p>
            </div> */}
            
        </nav>
        <h2 className="title primary"> Questions </h2>
        <div className="tile is-ancestor">
            <div className="tile is-12 is-vertical is-parent">
                {
                    questions.map( (question, index) => (
                        <div className="tile is-child box" key={question.id}>
                            <p className="title">{question.title}</p>
                            <p className="subtitle light">author: {question.author}</p>
                            
                            <p>{question.text}</p>
                        </div>
                            
                    ))
                }
            </div>      
            
        </div>  
    </div>
)



export default QuestionList;