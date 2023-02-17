import React, {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: "fill" | "line" | "";
  onClick: () => void;
}

const Button = ({text, className, onClick}: Props ) => {
  return <button type="button" className={`btn btn-${className}`} onClick={onClick}>
    <span className="btn-text">{text}</span>
  </button>
}

Button.defaultProps = {
  className: 'fill'
}


export default Button;