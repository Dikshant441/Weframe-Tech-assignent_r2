import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UpperBody from './Components/UpperBody'
import Mainbody from './Components/Main-body'
import Pagination from './Components/Pagination'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <UpperBody/>
      <Mainbody/>
      <Pagination/>
      <Footer/>

    </div>
  )
}

export default Home
