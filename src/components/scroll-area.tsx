import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const ScrollArea: FC<Props> = ({ children }) => {
  return (
    <div className='max-h-[350px] overflow-auto no-scrollbar w-full p-5'>
        { children }
    </div>
  )
}

export default ScrollArea