import { useNavigate} from "react-router-dom";
const Computer = () => {
    const history = useNavigate();
    
    return (
        <div>
        <h4>Computer</h4>
        <p> Laptop, PC, Monitor, Printer, dll </p>
        <button onClick={() => history('/services')}>Kembali</button>
    </div>
    )
}
export default Computer;