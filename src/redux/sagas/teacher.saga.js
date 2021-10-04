import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

// GETS the Programs for a teacher.
function* getPrograms(action){

}

// POSTS the Attendance of a given program. 
function* addAttendance(action){

}

function* teacherSaga(){
    yield takeLatest('FETCH_PROGRAMS', getPrograms);
    yield takeLatest('ADD_ATTENDANCE', addAttendance);
}
export default teacherSaga;