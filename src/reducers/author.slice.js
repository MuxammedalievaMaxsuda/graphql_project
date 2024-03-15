import { createSlice } from "@reduxjs/toolkit"

const initialState={
    authorIsPending: false,
    authors:[]
}

const authorsSlice=createSlice({
    name: 'author',
    initialState,
    reducers:{
        fetchingAuthors(state){
            state.authorIsPending=true
        },
        fetchedAuthors(state, action){
            state.authorIsPending=false
            state.authors=action.payload
        },
        fetchedErrorAuthors(state){
            state.authorIsPending=false
        }
    }
})

export const {fetchingAuthors, fetchedAuthors, fetchedErrorAuthors}=authorsSlice.actions
export default authorsSlice.reducer