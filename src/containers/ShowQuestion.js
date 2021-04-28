import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isQuestionAnswered } from "../utils/api";
import AnswerQuestion from "./AnswerQuestion";
import { NotFound } from "./NotFound";
import ResultPage from "./ResultPage";
import Signin from "./Signin";
class ShowQuestion extends Component {

render(){
    const {question, user, isAnswered, signUser} = this.props; 
    if(!signUser.length){
        return <Signin />
    }
    if(this.props.question_id) {
        return <NotFound />
    }
    return (
        isAnswered?
            <ResultPage question={question} signUser={this.props.signUser} user={user}/>
            :
            <AnswerQuestion question={question} signUser={this.props.signUser} user={user} />
    )

}
}

function mapStateToProps({signUser, users, questions}, ownProps) {
    const { question_id } = ownProps.match.params; 
    if(!questions[question_id]){
        return { signUser, question_id};
    }
    const {optionTwo, optionOne, author} =questions[question_id];
    
    return {
         signUser,
         user:users[author], 
         question:questions[question_id],
         isAnswered: isQuestionAnswered(optionTwo, optionOne, signUser)
        };
}

export default withRouter(connect(mapStateToProps)(ShowQuestion));