import { createSelector } from 'reselect';


// An input selector takes the whole state and returns a slice back(one layer deep usually). starts with 'select'
const selectUser = state => state.user

// Output takes two arguments, the first is an array of the input selectors.
// And then the second argument is a funciton that returns the value we want out of the selector.

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

