import { userActionTypes } from './user.actions';

export const setCurrentUser = user => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user
});