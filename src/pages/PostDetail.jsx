import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPosts } from '../getDataGraphQL/getDataGraphQL'
import { useDispatch, useSelector } from 'react-redux'

const PostDetail = () => {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    console.log(slug)

    useEffect(() => {
        getPosts(dispatch)
    }, [])
    return (
        <div>
            {[posts.find(postItem => postItem.slug == slug)].map(item => (
                <div key={item?.id} className='mt-6'>
                    <h1 className='text-[30px] font-bold'>{item?.title}</h1>
                    <div className='flex  items-center gap-2 p-[3px] rounded-sm mt-3'>
                        <div className='min-w-[40px]'>
                            <img src={item?.author?.avatar?.url} className='w-[50px] h-[50px] rounded-full border-[1px] p-[2px]' alt="" />
                        </div>
                        <div>
                            <p className='font-semibold text-[15px] '>{item?.author?.fullName}</p>
                            <p className='text-[12px] text-slate-500'>{item?.author?.bio?.slice(0, 60)}</p>
                        </div>
                    </div>
                    <hr className='mt-3'/>
                    <div className='mt-4'>
                        <p className='text-[20px] font-semibold'>{item?.excerpt}</p>
                    </div>
                    <div>
                        <img className='my-4 max-w-full' src={item?.coverImage?.url} alt="" />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: item?.content?.html}} className='content'></div>
                    <hr />
                    <div className='mt-[120px] mb-[50px] rounded-md border-blue-400 p-[20px] border-[1px] bg-blue-200 relative'>
                        <img src={item?.author?.avatar?.url} className='rounded-full absolute left-[50%] translate-x-[-50%] top-[-50%] h-[150px] w-[150px] p-[5px] border-[2px] border-blue-400' alt="" />
                        <p className='text-[20px] mt-[60px] text-white text-center font-semibold '>{item?.author?.fullName}</p>
                        <p className='text-18px] text-center text-gray-700'>{item?.author?.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostDetail