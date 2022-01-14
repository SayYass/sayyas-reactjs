import { useNavigate } from "react-router-dom";

const Smartphone = () => {

    const history = useNavigate();
    
    return (
        <div>
        <h4>Smartphone</h4>
        <p> Iphone, Samsung, Xiaomi, Oppo, dll </p>
        <button onClick={() => history('/services')}>Kembali</button>
    </div>
    )
}
export default Smartphone;