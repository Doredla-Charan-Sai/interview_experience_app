import './index.css'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <div className='header'>
            <Link to='/' className='header-link'>
                <p>Home</p>
            </Link>
            <Link to="/list" className="header-link">
                <p>Check List</p>
            </Link>
        </div>
    )
};

export default Header;