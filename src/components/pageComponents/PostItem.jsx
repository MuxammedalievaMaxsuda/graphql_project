import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ item }) => {
    return (
        <div className='min-h-max shadow-md sm:flex-col md:flex-row rounded-sm border-[1px] flex justify-center items-center gap-2 p-2'>
            <div className='flex-[5]'>
                <div className='cursor-pointer max-w-max group flex justify-start items-center gap-1'>
                    <img src={item.author.avatar.url} className='rounded-full w-[40px] h-[40px] p-[1px] border-[2px] border-green-800' alt="" />
                    <span className='group-hover:underline'>{item?.author.fullName}</span>
                    <span>-</span>
                    <span className='text-slate-400'>{item.createdAt.slice(0, 10)}</span>
                </div>
                <hr className='my-2' />
                <div>
                    <Link to={`posts/${item.slug}`}>
                        <h1 className='text-[20px] font-bold cursor-pointer hover:text-blue-700'>{item.title}</h1>
                    </Link>
                    <p className=''>
                        {item.excerpt}
                    </p>
                </div>
            </div>
            <div className='flex-[2]'>
                <img className='w-full rounded-sm h-[200px] object-cover border-[1px]' src={item.coverImage.url} alt="" />
            </div>
        </div>
    )
}

export default PostItem