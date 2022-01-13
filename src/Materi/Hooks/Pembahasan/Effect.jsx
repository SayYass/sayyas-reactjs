import axios from "axios";
import { useEffect, useState } from "react"

const Effect = () => {
    let [text, setText] = useState('');
    let [ user , setUser] = useState([]);
    let [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log('getApi');
        axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=4994cc78db5f49bfbac2484a02e76cfe')
        .then(res => setUser(res.data.articles))
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
            
            <ul>
                {
                    user.map(u => <li>{u.title}</li> )
                }
            </ul>
           <div>Waktu Yang berjalan : {Math.floor(seconds / 60) } Menit {seconds % 60} Detik </div>
        </div>
    )
}
export default Effect;