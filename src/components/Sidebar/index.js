import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faHome } from '@fortawesome/free-brands-svg-icons'
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
    </div>
)

export default Sidebar