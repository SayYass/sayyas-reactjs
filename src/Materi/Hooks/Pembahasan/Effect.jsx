import axios from "axios";
import { useEffect, useState } from "react"

const Effect = () => {
    let [text, setText] = useState('');
    let [ user , setUser] = useState([]);
    let [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log('getApi');
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => setUser(res.data))
    }, [])

    useEffect(()=> {
    localStorage.setItem('text' , text);
    }, [text]);

    useEffect(() => {
       let intervalId = setInterval(() => {
            setSeconds(s => s +1);
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            
           <p>{user.name}</p>
           <div>Waktu Yang berjalan : {Math.floor(seconds / 60) } Menit {seconds % 60} Detik </div>
        </div>
    )
}
export default Effect;