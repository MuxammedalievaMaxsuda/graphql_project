import { createSlice } from "@reduxjs/toolkit"

const initialState={
    postIsPending: false,
    posts: [],
    selectPosts:[]
}

const postsSlice=createSlice({
    name: 'post',
    initialState,
    reducers:{
        fetchingPosts(state){
            state.postIsPending=true
        },
        fetchedPosts(state,action){
            state.postIsPending=false,
            state.posts=action.payload
        },
        fetchedErrorPost(state){
            state.postIsPending=false
        },
        selectPostsAuthor(state,action){
            state.selectPosts=action.payload
        }
    }
})

export const {fetchingPosts, fetchedPosts, fetchedErrorPost,selectPostsAuthor}=postsSlice.actions
export default postsSlice.reducer