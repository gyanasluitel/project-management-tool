export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        // make async call to database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date() 
        }).then(() => {
            //dipsatch returns an action to the reducer
            dispatch({ type: 'CREATE_PROJECT', project: project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};

