const initState = {
    projects: [
        {id: '1', title: 'hello', content:'world'},
        {id: '2', title: 'My friend', content: 'ganesha'},
        {id: '3', title: 'Norwegian Musician', content: 'Sisgrid'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("created project", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("create project error", action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;