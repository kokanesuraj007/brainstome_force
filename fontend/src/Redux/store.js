import { applyMiddleware,compose,combineReducers, legacy_createStore as createRedux } from "redux";
import thunk from "redux-thunk";
import { reducer as dataReducer } from "./AppReducer/reducer";
import {reducer as HomeReducer} from "./HomeReducer/reducer"
import {reducer as AuthReducer} from "./Auth/reducer"
// const store = legacy_createStore(reducer,DataReducer, applyMiddleware(thunk));
// export { store };


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ 
    app: dataReducer,
  home: HomeReducer,
  auth: AuthReducer,});

export const store = createRedux(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
