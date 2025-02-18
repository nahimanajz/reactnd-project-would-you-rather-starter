import React from  'react';
import { connect } from 'react-redux';

import { signInAction } from '../actions/signInAction';
import PanelTitle from '../components/PanelTitle';

class Signin extends React.Component{
    state = {
        user:''
    }
     handleLogin= (e) => {
        e.preventDefault();     
         
        const { dispatch } = this.props;        
        dispatch(signInAction(this.state.user))
     
    }
    selectUser = (loggedInuser) => this.setState(()=>({user: loggedInuser}));
     
    render() {
      
        return(       
            <div className="panel">
            <PanelTitle title="Welcome to the Would you Rather App !"/>
            <form className="panel-body" onSubmit={this.handleLogin}>
                <div className="react-redux-icon"></div>
                <h2 className="center"> Signin</h2>
                 
                        <select onChange={(e)=>this.selectUser(e.target.value)}>     
                            <option>Select User</option>
                            {
                                Object.values(this.props.users).map(user =>(
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                        <button type="submit"> Submit </button>
                
                    
            </form>   
          </div>
        )
    }
    
          
    
}
const mapStateToProps =({users})=>({ users});
export{Signin};
export default connect(mapStateToProps)(Signin);