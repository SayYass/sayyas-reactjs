
import { Link  } from "react-router-dom";


const Home = () => {
    

return(
    <div>
        <h2>Home Page</h2>

        <ul>
        <li> <Link to="/post/1">Satu</Link></li>
        <li><Link to="/post/2">Dua</Link></li>
        <li><Link to="/post/3">Tiga</Link></li>
        
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est fuga perspiciatis nostrum, doloremque fugiat modi, necessitatibus ratione, dolore quaerat recusandae temporibus. Ut dolor obcaecati, perspiciatis quasi officiis asperiores adipisci!</p>
        
    </div>
)
}
export default Home;