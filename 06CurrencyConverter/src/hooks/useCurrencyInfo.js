import { useState,useEffect } from "react";
function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setdata(res[currency]))
    },[currency])
    return data //only data is returned in this custom hook as we don't want to give control of hook to users by giving setdata type fn
}
export default useCurrencyInfo;