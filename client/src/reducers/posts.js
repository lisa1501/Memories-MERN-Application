import { FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) =>{
    // console.log(action.payload)
    switch (action.type) {
        case START_LOADING :
            return { ...state, isLoading: true}

        case END_LOADING:
            return { ...state, isLoading: false}

        case DELETE:
            return { ...state, posts:state.posts.filter((post) => post._id !== action.payload)};

        case UPDATE:
        case LIKE:
            // state.posts.map((post)=> console.log(post._id))
            // state.posts.map((message)=> console.log(message._id))
            // console.log(action.payload_.id)
            return { ...state, posts:state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};

        case FETCH_ALL:
            return{
                ...state,
                posts: action.payload.data ,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            } ;
        
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload};

        case FETCH_POST:
            return { ...state, post: action.payload};

        case CREATE:
            
            return { ...state, posts: [ ...state.posts,action.payload]};
            
    
        default:
            
            return state;
    }
}