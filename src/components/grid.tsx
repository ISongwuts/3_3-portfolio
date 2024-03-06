import { FC, ReactNode } from "react"


type Props = {
    children: ReactNode
}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div className="grid gap-3 grid-cols-10">
        { children }
    </div>
  )
}

export default Grid