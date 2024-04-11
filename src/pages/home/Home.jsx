import React from 'react'
import Navbar  from '../../components/navbar/Navbar'
import "./home.scss";


const Home = () => {
  return (
    <div>
      <Navbar/>
   <div className="bgimg">
   <div className="herosection">
        <div className="title">
          <h1>Your world of joy</h1>
          <h3>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</h3>
        </div>
        <div className="search">

        </div>

      </div>
   </div>

    </div>
  )
}

export default Home
