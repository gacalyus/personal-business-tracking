import '../Styles/Navbar.css'
//import logo from '../logo.svg';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';


function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarLogo">
            <AssuredWorkloadIcon sx={{ mr: 2 }} className="navbarIcon" color='secondary' size />
            <text className="navbarTitle">Business Tracking and Prioritization System</text>
            </div>
            <hr />
        </div>
    );
}

export default Navbar;