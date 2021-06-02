export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        // make async call to database
        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Killua',
            authorLastName: 'Zoldyck',
            authorId: 12345,
            createdAt: new Date() 
        }).then(() => {
            //dipsatch returns an action to the reducer
            dispatch({ type: 'CREATE_PROJECT', project: project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};

