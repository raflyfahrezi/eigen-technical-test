import React, { useState, useEffect } from 'react'

import { axiosGet } from '@/utils'

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = async (url: string, controller: AbortController) => {
    setIsLoading(true)

    try {
      const response = await axiosGet<T>(url, { signal: controller.signal })

      setData(response.data)
    } catch (error) {
      // console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    fetchData(url, controller)

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isLoading }
}

export default useFetch
