import React from 'react'
import "./Found.scss"

const Found = () => {
  // window.onload = () => {
  // alert(2)

  // }
  document.documentElement.scrollTop = 0
  return (
    <div className='found' >
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <h3>Sorry, the page you are looking for does not exist.</h3>
        <h4>Click to go back to the home page.</h4>
    </div>
  )
}

export default Found