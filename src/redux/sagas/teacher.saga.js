import axios from "axios";
const {takeLatest, put } = require("redux-saga/effects");

// GETS the Programs for a teacher.
//function* getPrograms(action){
//    console.log('action.payload', action.payload);
//    try {
//       yield axios.get(`???`, action.payload);
//    } catch (error) {
//        console.log('error getting Programs', error);
//        yield put({ type: 'GET_PROGRAM_FAILED' });
//    }
//}

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

function* teacherSaga(){
    //yield takeLatest('FETCH_PROGRAMS', getPrograms);
    yield takeLatest('ADD_ATTENDANCE', addAttendance);
}
export default teacherSaga;