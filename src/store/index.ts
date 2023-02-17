import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "@feature/counter";
import drawerReducer from "@feature/drawer";

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        drawer: drawerReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
