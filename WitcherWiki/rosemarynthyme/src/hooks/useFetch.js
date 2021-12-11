import { useEffect, useState } from "react"

const apikey = '5d8026184c62934f7fdf293ad71aabb6'
const hash = '476c1c4da41ec2389b25fdd76ff63abd'
const useFetch = (url) => {

    url += `?ts=959589&apikey=${apikey}&hash=${hash}`

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could Not Fetch Data For That Resource!')
            }
            return res.json()
        })
        .then(data => {
            setData(data.data.results)
            setIsPending(false)
            setError(null)
            console.log(data);     
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch Aborted');
            }else{
                setIsPending(false)
                setError(err.message)
            }
        });

        return ()=>abortCont.abort();

    }, [url])

    return {data, isPending, error}
}

export default useFetch;