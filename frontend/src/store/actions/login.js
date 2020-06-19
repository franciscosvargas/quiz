export const request = (info) => ({
    type: 'LOGIN_REQUEST',
    payload: {
        ...info
    }
})

export const success = (userId, name, token) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        userId, 
        name, 
        token
    }
})

export const failure = (error) => ({
	type: 'LOGIN_FAILURE',
	payload: {
		error
	}
})

export const loading = () => ({
    type: 'LOGIN_LOADING',
})

export const logout = () => ({
    type: 'LOGOUT',
})