import React, { useEffect } from 'react'
import { getAuthors } from '../getDataGraphQL/getDataGraphQL'
import { useDispatch, useSelector } from 'react-redux'
import AuthorItem from './pageComponents/AuthorItem'

const Sidebar = () => {

  const dispatch=useDispatch()
  const {authors}=useSelector(state=>state.author)

  useEffect(()=>{
    getAuthors(dispatch)
  },[])
  // console.log(authors)
  return (
    <div className='border-[1px] max-h-max p-2 sticky top-0'>
      {authors.map(item=>(
        <AuthorItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Sidebar