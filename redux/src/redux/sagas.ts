import axios, { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import { PostType } from './types'
import * as slicesActions from './slices'

function* getPostsApi(action:ReturnType<typeof actions.getPostsApi>) {
    yield put(slicesActions.setIsLoading)

    const { payload: { limit } } = action
    
    try {
        const { data }: AxiosResponse<Array<PostType>> = yield axios.get(
            `https://jsonplaceholder.typicode.com/users/1/posts?_limit=${limit}`,
        )

        yield put(slicesActions.setPosts(data))
    } catch (error) {
        console.log(error)
        yield put(slicesActions.setIsError(true))
    }

    yield put(slicesActions.setIsLoading(false))
}

export function* watchCommonSaga(){
    yield takeLatest(actions.getPostsApi.type, getPostsApi)
}