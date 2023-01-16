import { combineReducers } from "redux";
import accountReducer from "./accountReducer";




const rootReducer = combineReducers({
    userAccount: accountReducer
})



export default rootReducer