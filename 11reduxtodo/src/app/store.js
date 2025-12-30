import { configureStore } from "@reduxjs/toolkit"; //used to create redux store
import todoReducer from '../features/todo/todoSlice' //imports reducer created by createslice..manages todo state only

export const store=configureStore({
    reducer:todoReducer //currenly only 1 slice is present ie todos hence reducer stores todos only
})