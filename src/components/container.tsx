import { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      { children }
    </div>
  )
};

export default Container;
