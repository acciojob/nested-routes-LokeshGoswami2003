import React from 'react'
import {Link} from 'react-router-dom';
const Layout = ({pages}) => {
  return (
    <nav>
        <ul>
            {pages.map((page, index) => <li key={index}><Link to={page.path}>{page.name}</Link></li>)}
            
        </ul>
    </nav>
  )
}

export default Layout