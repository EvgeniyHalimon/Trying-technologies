import './App.css'

import { useEffect } from 'react'

import useActions from './hooks/useActions'
import useTypedSelector from './hooks/useTypedSelector'
import { useMatchMedia } from './hooks/useMatchMedia'

function App() {
  const actions = useActions()

  const state = useTypedSelector(state => state)

  const {isMobile, isTablet, isDesktop} = useMatchMedia()

  let fetched = false
  const fetchPosts = () => {
    if(!fetched){
      actions.getPostsApi({ limit: 10 })
    }
  }

  useEffect(() => {
    fetchPosts()
    return () => {
      fetched = true
    }
  }, [])

  if (state.isError) {
    return <h1>Something went wrong, reload the page!</h1>
  }

  return (
    <div className="wrapper">

      {isDesktop && 'Desktop'}
      {isTablet && 'Tablet'}
      {isMobile && 'Mobile'}
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {state.posts.length
            ? state.posts.map(item => (
                <div key={item.id} className="post-wrapper">
                  {item.title}{' '}
                  <button
                    onClick={() => actions.removePosts(item.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              ))
            : 'No posts'}
        </div>
      )}

      <div className="buttons-wrapper">
        <button onClick={() => actions.getPostsApi({ limit: 1 })}>
          Load 1 post
        </button>
        <button onClick={() => actions.getPostsApi({ limit: 5 })}>
          Load 5 posts
        </button>
        <button onClick={() => actions.getPostsApi({ limit: 10 })}>
          Load 10 posts
        </button>
        <button onClick={() => actions.clearStore()}>Clear all posts</button>
      </div>
    </div>
  )
}

export default App