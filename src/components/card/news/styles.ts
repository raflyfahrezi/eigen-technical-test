import { css } from '@emotion/css'

export const sCard = css`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const sCardContent = css`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
`

export const sCardImage = css`
  width: 100%;
  height: 200px;

  object-fit: cover;

  border-radius: 3px;

  overflow: hidden;
`

export const sCardAuthor = css`
  color: #999;

  font-size: 12px;
`
