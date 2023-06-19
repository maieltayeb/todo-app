
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./reducers/todoReducer"





 const store = configureStore({ 
     reducer:{todo:todoReducer} ,
    

})
 export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//export default process.env.NODE_ENV==="development" ? configureStore (rootReducer,composeEnhancers( applyMiddleware(thunk))): configureStore(rootReducer, applyMiddleware(thunk));

