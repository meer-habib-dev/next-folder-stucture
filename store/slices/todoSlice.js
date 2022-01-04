import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: []
    },
    reducers: {
        addTodo: (state, {payload}) => {
            state.list.push(payload)
        },
        toggleStatus: (state, {payload}) => {
            state.list.splice(payload, 1, {...state.list[payload], status: !state.list[payload].status})

        },
        deleteTodo: (state, {payload}) => {
            state.list.splice(payload, 1)
        }
    }
})

export const {
    addTodo: addTodoAction,
    toggleStatus: toggleStatusAction,
    deleteTodo: deleteTodoAction
} = TodoSlice.actions;

export default TodoSlice.reducer

export const todoSelector = state => state.todo;
