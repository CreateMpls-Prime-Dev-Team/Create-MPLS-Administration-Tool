import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSettings() {
    try {
        const response = yield axios.get('/api/config');
        yield put({ type: 'SET_SETTINGS', payload: response.data });
    }
    catch (error) {
        console.log('Error with GET config', error);
    }
}

function* settingsSaga() {
    yield takeLatest('GET_SETTINGS', getSettings);
}

export default settingsSaga;