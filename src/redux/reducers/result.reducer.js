import { combineReducers } from 'redux';

// studentReducer holds the array of students that will display on the screen.
const studentReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_STUDENT_COMPLETED':
            return action.payload;
        case 'GET_STUDENT_FAILED':
            return 'Error receiving Students';
        default:
            return state;
    }
};

// studentReducer holds the array of teachers that will display on the screen.
const teacherReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TEACHERS_COMPLETED':
            return action.payload;
        case 'GET_TEACHERS_FAILED':
            return 'Error receiving Teachers';
        default:
            return state;
    }
};

// programReducer holds the array of programs that will display on the screen.
const programReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PROGRAM_COMPLETED':
            return action.payload;
        case 'GET_PROGRAM_FAILED':
            return 'Error receiving Programs';
        default:
            return state;
    }
};

// these will be on the redux state at:
// state.result.reducerName
export default combineReducers({
    studentReducer,
    teacherReducer,
    programReducer,
});
