import { applyMiddleware } from "redux";
import reducers from "../../reducers";
import middleware from "../../middleware";
import store from "../../store";

export const storeTest =(initialState) =>{
 const createStoreWithMiddleware =applyMiddleware(...middleware)(store);
 return createStoreWithMiddleware(reducers, initialState)
} 