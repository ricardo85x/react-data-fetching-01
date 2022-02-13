import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"



export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T|null>(null)

    const [isFetching, setFetching] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        axios.get(url)
          .then(response => {
            setData(response.data)
          })
          .catch(() => setError(true))
          .finally(() => 
            setFetching(false)
          )
      }, [])

    return { data, isFetching }
      
}