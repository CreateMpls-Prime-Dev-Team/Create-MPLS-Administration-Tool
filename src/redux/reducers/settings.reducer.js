const settingsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SETTINGS':
            return action.payload;
        default:
            return state;
    }
};

export default settingsReducer;