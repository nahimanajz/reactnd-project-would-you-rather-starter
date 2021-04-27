import { applyMiddleware } from "redux";
import reducers from "../../reducers";
import middleware from "../../middleware";
import store from "../../store";

export const findByTestAttr = ( component, attr )=>component.find(`data-set[$${attr}]`);

export const storeTest =(initialState) =>{
 const createStoreWithMiddleware =applyMiddleware(...middleware)(store);
 return createStoreWithMiddleware(reducers, initialState)
} 