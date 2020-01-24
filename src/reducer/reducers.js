import {combineReducers} from 'redux';
import auth from '../modules/auth/reducer/auth.reducer';

export default combineReducers({
    auth:auth
})