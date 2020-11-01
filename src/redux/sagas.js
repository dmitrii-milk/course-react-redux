import {call, put, takeEvery} from 'redux-saga/effects';
import { hideLoading, showAlert, showLoading } from './actions';
import { FETCH_POSTS, REQUEST_POSTS } from './types';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {

    try {
        yield put(showLoading())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POSTS, payload})
        yield put(hideLoading())
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'))
        yield put(hideLoading())
    }

  
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await response.json()
}