import { Link } from "react-router-dom";
import "./index.css"

const Navigation = () => {
    return(
        <div className="sidebar">
           <Link to="/" ><i className="fa fa-fw fa-home"></i> Home </Link>
            <Link to="/services" > <i className="fa fa-fw fa-wrench"></i> Services</Link>
            <Link to="/client" > <i className="fa fa-fw fa-user"></i> Clients</Link>
            <Link to="/contact" > <i className="fa fa-fw fa-envelope"></i> Contact</Link>
        </div>
    )
}

export default Navigation;