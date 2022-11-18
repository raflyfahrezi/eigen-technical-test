import { TNews } from '@/models'

export type TNewsCardProps = {
  onClick: (news: TNews) => void
} & TNews
