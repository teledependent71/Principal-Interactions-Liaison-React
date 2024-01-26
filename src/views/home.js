import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Interactions Liaison</title>
        <meta property="og:title" content="Principal Interactions Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
