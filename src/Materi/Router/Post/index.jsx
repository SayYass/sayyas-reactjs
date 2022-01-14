import { useNavigate, useParams } from "react-router-dom";
const Post = () => {
    const history = useNavigate();
    const{id} = useParams();
    return (
        <div>
        <h4>Post ke-{id}</h4>
        <p> Deskripsi </p>
        <button onClick={() => history('/')}>Kembali</button>
    </div>
    )
}
export default Post;