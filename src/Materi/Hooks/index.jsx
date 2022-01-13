

import { useState } from "react";
import Effect from "./Pembahasan/Effect";
import { useToggle } from "./Pembahasan/hook/useToggle";
import Identity from "./Pembahasan/Identity";


const Hooks = () => {
    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToggle();

    const style = {
        background : lampu ? 'yellow' : 'black' , 
        textAlign : 'center' ,
         height : '400px'
    }
    const textStyle = {
        color : 'white'
    }

    const handleSaklar = () => {
        setLampu(!lampu);
        setLabel(e => {
            if (e === 'ON'){
                return('OFF')
            } 
                return('ON')
            
        })
    }
    return(
        <div>
            <div style={style}>
            <button onClick={handleSaklar}> {label} </button>
            
        </div>
            <Identity style={textStyle}/>
            <Effect/>
            </div>
        
    )
}
export default Hooks;