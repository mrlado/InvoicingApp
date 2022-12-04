import React from 'react'
import './Logo.css'

const Logo = () => {
  return (
    <div>
        <div className="file-input">
  <input type="file" id="file" className="file"/>
  <label htmlFor="file">
    Select logo
  </label>
</div>
    </div>
  )
}

export default Logo