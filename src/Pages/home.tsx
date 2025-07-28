import React from 'react'
import Header from '../Components/Header/header'
import LowerHeader from '../Components/Header/LowerHeader'
import Carousel from '../Components/carousel/carousel'
import Category from '../Components/Category/category'
const home:React.FC = () => {
  return (
    <>
          <Header />
          <LowerHeader />
      <Carousel />
      <Category/>
    </>
  )
}

export default home
