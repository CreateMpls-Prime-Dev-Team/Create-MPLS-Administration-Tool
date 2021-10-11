import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

//GETS the Programs for a teacher.
function* getProgramsByTeacher(){
   try {
      const response = yield axios.get(`/api/program/by-assignment`);
      yield put({ type: 'SET_PROGRAMS_BY_TEACHER', payload: response.data});
   } catch (error) {
       console.log('error getting Programs', error);
       yield put({ type: 'GET_PROGRAM_FAILED' });
   }
}

// ADDS the Attendance of a given program. 
function* addAttendance(action){
    console.log('action.payload', action.payload);
    try {
        yield axios.post(`api/attendance/toggle`, action.payload);
    } catch (error) {
        console.log('Error with adding Attendance', error);
        yield put({ type: 'ADD_ATTENDANCE_FAILED' });
    }
}

// ADD New occurrence, returns id, sends to page
function* addOccurrence(action){
    try {
        const response = yield axios.post();
    } catch (error) {
        console.log('Error with adding new Occurrence', error);
    }
}

function* teacherSaga(){
    yield takeLatest('FETCH_PROGRAMS_BY_TEACHER', getProgramsByTeacher);
    yield takeLatest('ADD_ATTENDANCE', addAttendance);
    yield takeLatest('SET_PROGRAM_OCCURRENCE', addOccurrence);
}
export default teacherSaga;