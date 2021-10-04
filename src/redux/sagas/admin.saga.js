import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

// ADDS a student to the database.
function* addStudent(action){

}

// GETS a list of students.
function* getStudent(action){

}

// PUTS(edit) a student's info.
function* editStudent(action){

}

// DELETES a student from the database.
function* deleteStudent(action){

}

// GETS a list of teachers.
function* getTeacher(action) {

}

// PUTS(edit) a teacher's programs.
function* editAssignedPrograms(action){

}

// DELETES a teacher from the database. 
function* deleteTeacher(action){

}

// PUTS(edit) the registration code.
function* editRegistrationCode(action){

}

// ADDS a new program to the database.
function* addProgram(action){

}

//GETS a list of all the programs. 
function* getProgram(action){

}

//DELETES a program.
function* deleteProgram(action){

}

//ADDS a student to a program.
function* addStudentProgram(action){

}

// GETS all the data from the database. 
function* getAllData(action){

}
function* adminSaga() {
    yield takeLatest('ADD_STUDENT', addStudent);
    yield takeLatest('FETCH_STUDENT', getStudent);
    yield takeLatest('EDIT_STUDENT', editStudent);
    yield takeLatest('DELETE_STUDENT', deleteStudent);
    yield takeLatest('FETCH_TEACHER', getTeacher);
    yield takeLatest('EDIT_TEACHER_PROGRAMS', editAssignedPrograms);
    yield takeLatest('DELETE_TEACHER', deleteTeacher);
    yield takeLatest('EDIT_CODE', editRegistrationCode);
    yield takeLatest('ADD_PROGRAM', addProgram);
    yield takeLatest('FETCH_PROGRAM', getProgram);
    yield takeLatest('DELETE_PROGRAM', deleteProgram);
    yield takeLatest('ADD_STUDENT_PROGRAM', addStudentProgram);
    yield takeLatest('FETCH_ALL_DATA', getAllData);
}
export default adminSaga;