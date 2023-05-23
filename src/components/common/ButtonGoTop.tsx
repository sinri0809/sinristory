import React, { RefObject, forwardRef } from "react";

interface ButtonProps {
  scrollElement: RefObject<HTMLElement>;
}

const ButtonGoTop = forwardRef<HTMLDivElement, ButtonProps>((props, ref)=>{
  const {scrollElement} = {...props};

  return <button
    className="btn btn-go-top"
    aria-hidden={false} // TODO: 스크롤 내림시 UI보임 처리
    onClick={()=>{
      if(scrollElement.current){
        scrollElement.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }}
  >
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>BUTTON/GOSCROLLTOP</title>
    <path d="M10 17L18 9M18 9L26 17M18 9V30" stroke="#F4F8FF"/>
  </svg>
  </button>
})

export default ButtonGoTop;