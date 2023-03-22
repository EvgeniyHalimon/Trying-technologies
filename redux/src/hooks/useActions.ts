import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { clearStore, getPostsApi } from '../redux/actions';

import { removePosts } from '../redux/slices'

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators({ getPostsApi, removePosts, clearStore }, dispatch)
}

export default useActions