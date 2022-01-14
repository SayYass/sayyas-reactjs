import { Link} from "react-router-dom";




const Services = () => {
    
    return(
        <div>
            <h2> <strong> Services </strong> </h2>
    
            <ul>
            <li> <Link to="/services/computer" >Computer</Link> </li>
            <li><Link to="/services/smartphone"> Smartphone</Link></li>
            
            </ul>
            <hr />
           
        </div>
    )
    }

   
    export default Services;