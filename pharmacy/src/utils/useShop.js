import { useEffect, useState } from "react";

function useShop() {
    let [shop, setShop] = useState({})

    useEffect(() => {
        try{
            let shop = JSON.parse(localStorage.getItem("Shop"))
            setShop(shop)
        }catch (error){
            console.log(error)
            setShop(null)
        }
    },[])

    return shop;
}

export default useShop;