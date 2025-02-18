import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function LeaderBoard(props){
    console.log(props)
   
   let {signUser, users} = props;
   users = Object.values(users).sort((a, b)=> (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + b.questions.length))
    if(!signUser.length){
        props.history.push("/");
    }
    return(<div className="leaderboard-container"> 
            {
                 Object.values(users).map(({name, avatarURL, questions, answers}) =>(
                     
                    <div className="content" key={name}>
                        <div className="score-body">
                            <div className="user-icon" style={{backgroundImage: `url(${avatarURL})` }}></div>

                        </div>
                        <div className="flex-between">
                            <h1> {name}</h1>
                            <p className="flex-around">
                                <strong> Answered Questions  </strong>
                                 <strong> {Object.keys(answers).length ? Object.keys(answers).length: 0 } </strong> 
                                
                            </p>
                            <p className="border-bottom"></p>
                            <p className="flex-around">
                                <strong> Created Questions  </strong>
                                <strong>
                                    {questions.length ?questions.length: 0} 
                                </strong>
                            </p>
                        
                        </div>
                        <div className="score">
                            <div className="score-title"><strong>Score</strong></div>
                            <div className="score-body">
                                <strong className="score-circle">                                     
                                     {questions.length + Object.keys(answers).length} 
                                </strong>
                            </div>
                        </div>
                    </div>
               ))
            } 
            
         </div>
       
    ) 
}
function mapStateToProps ({signUser, users}){
    
    return {        
        users, 
        signUser
    }
}

export default withRouter(connect(mapStateToProps)(LeaderBoard));