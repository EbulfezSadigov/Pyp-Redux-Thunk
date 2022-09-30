import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div>
        <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyle:'none'}}>
            <li><Link to='/' style={{fontSize:40}}>Home</Link></li>
        </ul>
    </div>
  )
}

export default SiteHeader