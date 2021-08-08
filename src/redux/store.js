


import { applyMiddleware, createStore, combineReducers } from 'redux'
import rootReducer from './reducers/rootReducer'


//Middleware
import thunk from 'redux-thunk'
// import logger from 'redux-logger'



export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk,)
  )
  return store;
}

