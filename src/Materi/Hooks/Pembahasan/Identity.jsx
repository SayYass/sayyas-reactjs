import { useCallback, useEffect, useState } from "react";

const Identity = () => {
    const fecthUser = useCallback(() => ['aldo', 'wawan' , 'edi'], []);
    let [user, setUser] = useState([]);
    
    useEffect(() => {
        const data = fecthUser();
        setUser(data)
    }, [fecthUser])
    return(
        <div>
            <ul>
                {
                user.map(u => <li key={u}>{u}</li> )
                }    
            </ul>
        </div>
    )
}
export default Identity;