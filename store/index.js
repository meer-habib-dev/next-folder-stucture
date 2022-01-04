import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import all reducers
import todoReducer from './slices/todoSlice'

// register all reducers here
const rootReducer = combineReducers({
    todo: todoReducer
})



// store setup
const store = configureStore({
    reducer: rootReducer
})


export default store