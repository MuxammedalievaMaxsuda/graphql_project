import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'

const Layout = () => {
  return (
    <div className=''>
      <Header/>
      <Container>
        <div className='flex justify-between gap-1 mt-2'>
          <div className='flex-[2.5]'>
            <Content/>
          </div>
          <div className='flex-[1] max-h-max sm:hidden md:flex relative'>
            <Sidebar/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Layout