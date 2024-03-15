import React, { useDebugValue } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostsAuthor } from '../reducers/posts.slice'

const Header = () => {
  const dispatch=useDispatch()
  const {posts,selectPosts}=useSelector(state=>state.post)
  return (
    <header className=' shadow-sm border-b-[1px] border-gray-200'>
      <Container>
        <div className='flex justify-between items-center gap-1 py-3'>
          <Link to='/' onClick={()=>selectPostsAuthor(dispatch([]))}>
            <div className='text-[18px] font-bold'>
              <span className='text-indigo-600'>My</span>Blog
            </div>
          </Link>
          <div>
            <img src="https://picsum.photos/200" className='w-[40px] h-[40px] rounded-full border-[1px] p-[3] border-blue-600' alt="" />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header