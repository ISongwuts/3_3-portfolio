import { FC, ReactNode } from "react"


type Props = {
    children: ReactNode
}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
        { children }
    </div>
  )
}

export default Grid