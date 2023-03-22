import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit'

import { clearStore } from './actions'
import { PostType } from './types'
console.log("🚀 ~ file: slices.ts:4 ~ clearStore:", clearStore.type)

const posts = createSlice({
    name: 'posts',
    initialState: [] as Array<PostType>,
    reducers: {
        setPosts: (state, { payload }: PayloadAction<Array<PostType>>) => payload,
        removePosts: (state, { payload }: PayloadAction<number>) => 
        state.filter(item => item.id !== payload),
    },
    extraReducers: {
        [clearStore.type]: () => []
    }
})

const isLoading = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading : (state, { payload }: PayloadAction<boolean>) => payload,
    },
    extraReducers: {
        [clearStore.type]: () => false
    }
})

const isError = createSlice({
    name: 'isError',
    initialState: false,
    reducers: {
        setIsError: (state, { payload }: PayloadAction<boolean>) => payload
    },
    extraReducers: {
        [clearStore.type]: () => false 
    }
})

export const { setPosts, removePosts } = posts.actions
export const { setIsLoading } = isLoading.actions
export const { setIsError } = isError.actions

export const rootReducer = combineReducers({
    posts: posts.reducer,
    isLoading: isLoading.reducer,
    isError: isError.reducer
})