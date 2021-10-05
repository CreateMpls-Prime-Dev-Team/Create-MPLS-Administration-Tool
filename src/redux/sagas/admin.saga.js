import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

// ADDS a student to the database.
function* addStudent(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.post(`???`, action.payload);
    } catch (error) {
        console.log('Error with adding Student', error);
        yield put({ type: 'ADD_STUDENT_FAILED' });
    }
}

// GETS a list of students.
function* getStudent(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.get(`???`, action.payload);
    } catch (error) {
        console.log('error getting Students', error);
        yield put({ type: 'GET_STUDENT_FAILED' });
    }
}

// PUTS(edit) a student's info.
function* editStudent(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.put(`???${action.payload.id}`, action.payload)
    } catch (error) {
         console.log('Error Editing a Students info', error);
        yield put({ type: 'EDIT_STUDENT_FAILED' });
    }
}

// DELETES a student from the database.
function* deleteStudent(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.delete(`???${action.payload}`)
    } catch (error) {
        console.log('Error deleting Student', error);
        yield put({ type: 'DELETE_STUDENT_FAILED' });
    }
}

// GETS a list of teachers.
function* getTeacher(action) {
    console.log('action.payload', action.payload);
    try {
        yield axios.get(`???`, action.payload);
    } catch (error) {
        console.log('error getting Teachers', error);
        yield put({ type: 'GET_TEACHERS_FAILED' });
    }
}

// PUTS(edit) a teacher's programs.
function* editAssignedPrograms(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.put(`???${action.payload.id}`, action.payload)
    } catch (error) {
        console.log('Error Editing a Teachers Programs', error);
        yield put({ type: 'EDIT_ASSIGNED_PROGRAMS_FAILED' });
    }
}

// DELETES a teacher from the database. 
function* deleteTeacher(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.delete(`???${action.payload}`)
    } catch (error) {
        console.log('Error deleting Teacher', error);
        yield put({ type: 'DELETE_TEACHER_FAILED' });
    }
}

// PUTS(edit) the registration code.
function* editRegistrationCode(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.put(`???${action.payload.id}`, action.payload)
    } catch (error) {
        console.log('Error Editing the Registration Code', error);
        yield put({ type: 'EDIT_CODE_FAILED' });
    }
}

// ADDS a new program to the database.
function* addProgram(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.post(`???`, action.payload);
    } catch (error) {
        console.log('Error with adding Program', error);
        yield put({ type: 'ADD_PROGRAM_FAILED' });
    }
}

//GETS a list of all the programs. 
function* getProgram(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.get(`???`, action.payload);
    } catch (error) {
        console.log('error getting Programs', error);
        yield put({ type: 'GET_PROGRAM_FAILED' });
    }
}

//DELETES a program.
function* deleteProgram(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.delete(`???${action.payload}`)
    } catch (error) {
        console.log('Error deleting Program', error);
        yield put({ type: 'DELETE_PROGRAM_FAILED' });
    }
}

//ADDS a student to a program.
function* addStudentProgram(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.post(`???`, action.payload);
    } catch (error) {
        console.log('Error with adding a Student to a Program', error);
        yield put({ type: 'ADD_STUDENT_PROGRAM_FAILED' });
    }
}

// GETS all the data from the database. 
function* getAllData(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.get(`???`, action.payload);
    } catch (error) {
        console.log('error getting Data', error);
        yield put({ type: 'GET_DATA_FAILED' });
    }
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