import saga from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { configureStore } from '@reduxjs/toolkit';

import { watchCommonSaga } from './sagas'
import { rootReducer } from './slices';

function* RootSaga() {
  yield all([fork(watchCommonSaga)])
}

const sagaMiddleware = saga();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store