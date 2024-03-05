import { FC, ReactNode } from "react"


type Props = {
    children: ReactNode
}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-10 gap-3">
        { children }
    </div>
  )
}

export default Grid