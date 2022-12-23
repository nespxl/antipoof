import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slicePostArray from './arrayList'

export const rootReducer = combineReducers({
    slicePostArray
})

export const reducerToolkit = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type ReducerToolkitState = ReturnType<typeof reducerToolkit>
export type AppDispatch = ReducerToolkitState['dispatch']
