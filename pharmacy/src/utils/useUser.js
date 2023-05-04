import { useEffect, useState } from "react";

function useUser() {
    const [user, setUser] = useState({})

    useEffect(() => {
        try{
            let loginUser = JSON.parse(localStorage.getItem("User"))
            if (loginUser === null){
                throw new ReferenceError();
            }else{
                setUser(loginUser)
            }
        }catch (error){
            if(error.prototype === ReferenceError){
                console.log("Not login")
            }
            console.log(error)
            setUser(null)
        }
    },[])

    return user;
}

export default useUser;