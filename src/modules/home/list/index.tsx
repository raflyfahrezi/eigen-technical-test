import React, { useState } from 'react'
import { Card, Modal, Button, Pagination } from 'antd'

import { useFetch } from '@/hooks'
import { NewsCard } from '@/components'
import { TNews, TNewsResponse } from '@/models'

import { TModal } from './types'
import ModalContent from './modalContent'
import { sList, sListContent, sListPagination } from './styles'

const List = () => {
  const [page, setPage] = useState<number>(1)
  const [modal, setModal] = useState<TModal>({
    data: null,
    isOpen: false,
  })

  const { data, isLoading } = useFetch<TNewsResponse>(
    `top-headlines?category=general&country=id&pageSize=10&page=${page}`
  )

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }))
  }

  const handlePaginationChange = (page: number) => {
    setPage(page)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsCardButton = (data: TNews) => {
    setModal({ data, isOpen: true })
  }

  return (
    <>
      <Modal
        open={modal.isOpen}
        onCancel={closeModal}
        style={{ top: '20px' }}
        title={modal.data?.title}
        footer={[
          <Button key='close' onClick={closeModal}>
            Close
          </Button>,
          <Button
            key='link'
            type='primary'
            href={modal.data?.url}
            target='_blank'
          >
            Open News
          </Button>,
        ]}
      >
        {modal.data && <ModalContent {...modal.data} />}
      </Modal>
      <div className={sList}>
        <div className={sListContent}>
          {!isLoading ? (
            data?.articles.map((item) => {
              return (
                <NewsCard
                  key={item.url}
                  onClick={handleNewsCardButton}
                  {...item}
                />
              )
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
    </>
  )
}

export default List
