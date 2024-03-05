import { useState, useEffect } from 'react'
import axios from 'axios'

type Props = {
    url: string
}

const useFetch = (props: Props) => {
    const [data, setData] = useState<any | any>(null) 
    useEffect(()=>{
        const fetchData = async (url: string) => {
            const response = await axios.get(url)
            setData(response.data)
        }
        
        fetchData(props.url)
    }, [])
    return data
}

export default useFetch