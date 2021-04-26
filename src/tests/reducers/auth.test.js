import * as types from '../../constants';
import { signUser } from '../../reducers/signUser';


describe('Should authorize user',()=>{
    it('should return authed user', ()=> {
        const newState = signUser(undefined,{
            type:types.AUTHORIZE_USER,
            user:'tylermcginnis'
        });
        expect(newState).toEqual('tylermcginnis');
    })
    it('Should return empty when user logs out',()=>{  
        const newState = signUser(undefined,{
            type:types.LOGOUT_USER,
        });
        expect(newState).toEqual({signUser : ""})
    })
})
