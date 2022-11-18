import moment from 'moment'
import React, { useState } from 'react'
import { Card, Pagination } from 'antd'

import { useFetch } from '@/hooks'
import { NewsCard } from '@/components'
import { TNewsResponse } from '@/models'

import { sList, sListContent, sListPagination } from './styles'

const List = () => {
  const [page, setPage] = useState<number>(1)

  const { data, isLoading } = useFetch<TNewsResponse>(
    `top-headlines?category=general&country=id&pageSize=10&page=${page}`
  )

  const handlePaginationChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setPage(page)
  }

  return (
    <div className={sList}>
      <div className={sListContent}>
        {!isLoading ? (
          data?.articles.map((item) => {
            return <NewsCard key={item.url} {...item} />
          })
        ) : (
          <>
            <Card loading />
            <Card loading />
            <Card loading />
          </>
        )}
      </div>
      <div className={sListPagination}>
        <Pagination
          total={data?.totalResults}
          current={page}
          showSizeChanger={false}
          pageSize={10}
          disabled={isLoading}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  )
}

export default List
