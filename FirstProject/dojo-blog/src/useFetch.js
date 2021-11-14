import { useEffect, useState } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok){ //res.ok == True means fatch was ok and we got the data
                throw Error('Could not fetch the data for that resource');
            }
            return res.json() //returning another promise
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch Aborted');
            }else{
                setIsPending(false)
                setError(err.message); 
            }
        });

        return () => abortCont.abort();
}, [url]); //function inside will be called on every re-render of DOM
    // therefore on every state change and on reloading

    // Dependency array stores the states which on changing will call useEffect
    //Changing state inside useEffect could lead to infinite recursion
    // we can set stopping condition but more on that later

    return {data, isPending, error}
}


export default useFetch;