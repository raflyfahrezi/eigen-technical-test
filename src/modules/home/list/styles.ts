import { css } from '@emotion/css'

export const sList = css`
  width: 100%;

  padding: 40px 0;

  display: flex;
  gap: 20px;
  flex-direction: column;
`

export const sListContent = css`
  width: 100%;

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export const sListPagination = css`
  width: 100%;

  display: flex;
  justify-content: center;
`
