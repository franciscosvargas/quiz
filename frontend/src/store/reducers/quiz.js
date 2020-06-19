const INITIAL_STATE = {
	title: null,
	number: null,
	questions: [],
	current: 0
};

// Reducer
export default function quiz(state = INITIAL_STATE, action) {
    switch (action.type) {
		case 'QUIZ_REQUEST':
			const { title, questions, number } = action.payload
            return { 
				...state, 
				title,
				questions,
				number,
				current: 0
			};
			break;
		
		case 'QUIZ_NEXT_QUESTION':
            return { 
				...state, 
				current: state.current + 1
			};
        	break;
        
        default:
            return state;
    }
}