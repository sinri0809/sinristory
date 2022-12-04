import React from 'react';

interface AnimationProps {
  attr: string;
  type?: string;
  from: number;
  to: number;
  delay: string;
  duration: string;
}

const Animation = ({ attr, delay, duration, type = 'linear', from, to }: AnimationProps) => {
  return (
    <animate
      attributeName={attr}
      begin={delay}
      dur={duration}
      type={type}
      from={from}
      to={to}
    />
  );
};

export default Animation;