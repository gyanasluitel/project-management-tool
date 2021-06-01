export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project: project});
    }
}

//dipsatch returns an action to the reducer