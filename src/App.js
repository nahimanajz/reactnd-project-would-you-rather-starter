
import React from 'react'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import NewQuestion from './containers/NewQuestion'
import LeaderBoard from './containers/LeaderBoard';

import HomePage from './containers/HomePage';
import { connect } from 'react-redux';
import { getInitialData } from './actions/shared';
import { logoutAction } from './actions/signInAction'
import ShowQuestion from './containers/ShowQuestion';

class App extends React.Component {
   componentDidMount() {
    this.props.getInitialData()
   }
   logoutHandler() {
    this.props.logoutAction();
   
   }
  render() {
    const {users,signUser } = this.props;
    const authedUser = Object.values(users).filter(user => user.id ===signUser);  
    const name = authedUser.map(({name})=> name); 

    return (
      <BrowserRouter>   
     
      <header>
        {
      signUser.length &&(
        <div className="nav">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/add">New Question</Link>
          <Link className="item" to="/leaderboard">Leader Board</Link>
          {name.length ?(
            <>            
              <div className="item">Hello {name}</div>
              <div className="item" onClick={(e)=>this.logoutHandler()}>Logout</div>
            </>
            
          ):<> </>}
          
        </div>
         )} 
      </header>
      <main>
        <Route path="/add" component={NewQuestion} />
        <Route path="/questions/:question_id" component={ShowQuestion} /> 
  
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/" component={HomePage} exact authUser={authedUser} />
      </main>  

    </BrowserRouter>
    ) 
  }
}
const mapStateToProps = ({users, questions, signUser}) =>({ users, questions, signUser});
const mapDispatchToProps = dispatch => ({
  getInitialData: ()=>dispatch(getInitialData()),
  logoutAction: () => dispatch(logoutAction())
});
export {App as MyApp} 
export default connect(mapStateToProps, mapDispatchToProps)(App);
