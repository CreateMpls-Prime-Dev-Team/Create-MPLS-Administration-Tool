import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import settings from './settings.reducer';
import student from './student.reducer';
import teacher from './teacher.reducer';
import program from './program.reducer';
import studentToEdit from './studentToEdit.reducer';
import programToEdit from './programToEdit.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  settings, // provides registration code to front end
  student, // holds the list of students to be sent to the front end. 
  teacher, // holds the list of teachers to be sent to the front end. 
  program, // holds the list of programs to be sent to the front end. 
  studentToEdit, // Holds the student from search to edit
  programToEdit, // Holds the program from search to edit
});

export default rootReducer;
