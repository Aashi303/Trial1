import React from 'react'
const Home = () => {
const msg=localStorage.getItem("msg");
  return (
    <div>
        <h1 align="center"> Your Message is : {msg}</h1>
    </div>
  )
}
export default Home
