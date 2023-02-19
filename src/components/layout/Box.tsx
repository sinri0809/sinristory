import React from 'react';

interface Props {
  children: React.ReactNode
}

const Box = ({ children }: Props) => {
  return <div className="box">
    <div className="box-wrap">
      {children}
    </div>
  </div>
}

interface ElementProps extends Props {
  element: string;
}

Box.Element = ({ children, element }: ElementProps) => {
  return <div className={`box-${element}`}>
    {children}
  </div>
}

export default Box;