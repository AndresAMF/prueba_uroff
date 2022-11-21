import React from 'react'
import bannerImg from '../../Assets/imgs/banner.jpg'

function Banner() {
  return (
    <div className="banner">
        <img className="bannerImg" src={bannerImg} alt='banner-img' />
      </div>
  )
}

export default Banner