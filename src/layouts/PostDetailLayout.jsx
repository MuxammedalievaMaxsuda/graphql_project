import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import Content from '../components/Content'

const PostDetailLayout = () => {
    return (
        <div className=''>
            <Header />
            <Container>
                <div className='flex justify-between gap-1 mt-2'>
                    <div className='sm:mx-0 md:mx-[5%]'>
                        <Content />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PostDetailLayout