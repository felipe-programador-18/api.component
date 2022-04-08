import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <ul>
            <li>
              <Link to='/'> link 1</Link>   </li>
            <li>
                <Link to='/2'></Link>
            </li>
        </ul>
    )
}

export default Header



