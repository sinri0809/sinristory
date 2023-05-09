import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Board({ children }: Props) {
  return <div className="board__container">{children}</div>;
}
