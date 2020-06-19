export const request = (info) => ({
    type: 'QUIZ_REQUEST',
    payload: {
        ...info
    }
})

export const next = () => ({
    type: 'QUIZ_NEXT_QUESTION'
})

export const finish = (number) => ({
	type: 'QUIZ_FINISH',
	payload: {
		number
	}
})

