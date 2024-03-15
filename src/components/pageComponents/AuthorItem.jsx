import React from 'react'
import { selectPostsAuthor } from '../../reducers/posts.slice'
import { useDispatch, useSelector } from 'react-redux'

const AuthorItem = ({item}) => {

    const {posts,selectPosts}=useSelector(state=>state.post)
    const dispatch=useDispatch()
    // console.log(selectPosts)
  return (
    <div onClick={()=>dispatch(selectPostsAuthor(posts.filter(postItem=>postItem.author.id==item.id)))} className='flex justify-start gap-1 border-[1px] p-[3px] rounded-sm mb-2 shadow-sm cursor-pointer hover:bg-slate-50'>
        <div className='min-w-[40px]'>
            <img src={item.avatar.url} className='w-[40px] h-[40px] rounded-full border-[1px] p-[2px]' alt="" />
        </div>
        <div>
            <p className='font-semibold text-[15px] '>{item.fullName}</p>
            <p className='text-[12px] text-slate-500'>{item.bio.slice(0,60)}</p>
        </div>
    </div>
  )
}

export default AuthorItem