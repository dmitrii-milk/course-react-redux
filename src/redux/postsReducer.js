import { CREATE_POST, FETCH_POSTS } from "./types";

const initailState = {
    posts: [], 
    fetchPosts: []
}


export const postsReducer = (state = initailState, action) => {
    switch(action.type) {
        case CREATE_POST: 
            return {...state, posts: state.posts.concat([action.payload])}
            // return {...state, posts: [...state.posts, action.payload]} аналогичный метод
        case FETCH_POSTS:
            return {...state, fetchPosts: action.payload}
        default: return state
    }
   
}