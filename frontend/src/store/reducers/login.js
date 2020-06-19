const INITIAL_STATE = {
    userId: null, 
    name: null,
    token: null, 
	error: false,
	loading: false
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
			//Refresh the state with the user data
            return { 
				...state, 
				userId: action.payload.userId, 
				name: action.payload.name, 
				token: action.payload.token, 
				error: false, 
				loading: false 
			};
            break;
        case 'LOGIN_FAILURE':
			//Refresh the state with the error message
            return { ...state, error: action.payload.error, loading: false}
			break;
		case 'LOGIN_LOADING':
			//Refresh the state with the loading flag
			return { ...state, error: false, loading: true}
			break;
        case 'LOGOUT':
            return { ...state }
        default:
            return state;
    }
}