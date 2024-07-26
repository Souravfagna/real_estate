import React from 'react'
import Searchbar from "../../components/searchbar/seachbar"
import './home.scss'
export default function home() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrap">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa vero facere debitis veritatis, fugit voluptate sint saepe enim illo reiciendis quia nulla. Totam obcaecati saepe, officiis odio, ipsam explicabo sapiente facere autem, corrupti ut consequatur laudantium sint. Aspernatur, reprehenderit!
          </p>
          <Searchbar/>
          <div className="boxes">
          <div className="box">
            <h1>10+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="box">
            <h1>20</h1>
            <h2>Award Gained</h2>
          </div>
          <div className="box">
            <h1>800+</h1>
            <h2>Property Ready</h2>
          </div>
          </div>
        </div>
        
      </div>
      <div className="imgcontainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}
