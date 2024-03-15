import React, { useEffect } from 'react'
import PostItem from '../components/pageComponents/PostItem'
import { getPosts } from '../getDataGraphQL/getDataGraphQL'
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {

  const {posts,selectPosts}=useSelector(state=>state.post)
  const dispatch=useDispatch()

  useEffect(()=>{
    getPosts(dispatch)
  },[])

  return (
    <div>
       {selectPosts.length==0?
       posts.map(item=>(
        <PostItem key={item.id} item={item}/>
      )):
      selectPosts.map(item=>(
        <PostItem key={item.id} item={item}/>
      ))}
      
    </div>
  )
}

export default Posts