import { createSelector } from 'reselect';

// This gets the state from the reducer.
const selectDirectory = state => state.directory;

// This exports the piece of the state that we want.
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);