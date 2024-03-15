import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../reducers/posts.slice";
import authorSlice from "../reducers/author.slice";

export const store=configureStore({
    reducer:{
        post: postsSlice,
        author: authorSlice
    }
})