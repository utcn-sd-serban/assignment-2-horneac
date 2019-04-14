import React from "react"

const QuestionList = ({questions,onSearchTitle, newQuestion, 
    onChangeNewQuestionProperty, onLogOut,
    onSearchTag, tagOrTitle, onSearchBarChange, onClickNewQuestion}) => (
    <div className="hero-primary">
        {/* <!-- Main container --> */}
        <nav className="level">
        {/* <!-- Left side --> */}
        <div className="level-left">
            <div className="level-item">
            <p className="subtitle is-5">
                <strong> </strong> questions
            </p>
            </div>
            <div className="level-item">
            <div className="field has-addons">
                <p className="control">
                <input className="input" placeholder="Find a question" value={tagOrTitle} onChange={e => onSearchBarChange(e.target.value)}/>
                </p>
                <p className="control">
                <button className="button" onClick={onSearchTitle}>
                    Search title
                </button>
                <button className="button" onClick={onSearchTag}>
                    Search tag
                </button>
                </p>
            </div>
            </div>
        </div>

        {/* <!-- Right side --> */}
        <div className="level-right">
            <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button is-success" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>New</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                        <label >Title</label>
                        <input value={newQuestion.title} onChange={e => onChangeNewQuestionProperty("title", e.target.value)}></input>
                        <label>Text</label>
                        <textarea className="textarea" value={newQuestion.text} onChange={e => onChangeNewQuestionProperty("text", e.target.value)}/>
                        <label>Tags</label>
                        <input></input>
                        <hr className="dropdown-divider"/>
                        <button className="button" onClick={onClickNewQuestion}> Post</button>
                        </div>
                    </div>
            </div>
           
            <p className="level-item"><button className="button" onClick={onLogOut}>Log out</button></p>
            
            
            {/* <div className="dropdown">
                <p className="level-item"><button className="button is-success" onClick={onClickNewQuestion}>New</button></p>
            </div> */}
            
        </div>
        </nav>
        <h2 className="title primary"> Questions </h2>
        <div className="tile is-ancestor">
            <div className="tile is-12 is-vertical is-parent">
                {
                    questions.map( (question, index) => (
                        <div className="tile is-child box">
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