import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [ispendenig,setispendenig]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const abortCont= new AbortController()
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
        .then((res)=>{
            if(!res.ok){
                throw Error("could not fetch data for that resource")
            }
            return res.json()
        })
        .then((data)=>{
            setData(data)
            setispendenig(false)
            setError(null)
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted')
            }
            else{
            setispendenig(false)
            setError(err.message)
            }
        })
        },2000)
        return ()=>{abortCont.abort()}
    },[url])

    return ({data,ispendenig,error}  );
}
 
export default useFetch;