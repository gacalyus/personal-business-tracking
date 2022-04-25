import '../Styles/Navbar.css'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';


function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarLogo">
                <AssuredWorkloadIcon sx={{ mr: 2 }} className="navbarIcon" color='secondary' />
                <p className="navbarTitle">Business Tracking and Prioritization System</p>
            </div>
            <hr />
        </div>
    );
}

export default Navbar;