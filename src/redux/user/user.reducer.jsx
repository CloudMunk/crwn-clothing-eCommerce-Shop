const  INITIAL_STATE = {
    currentUser: null
}

// If state is ever undefined, then it will fall back and leverage the initial state value that we passed.
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;