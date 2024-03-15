import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layouts/Layout'
import Posts from './pages/Posts'
import PostDetailLayout from './layouts/PostDetailLayout'
import PostDetail from './pages/PostDetail'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Posts />} />
        </Route>
        <Route path='posts' element={<PostDetailLayout/>}>
          <Route path=':slug' element={<PostDetail/>}/>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App