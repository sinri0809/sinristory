import React from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode
}

const GlobalPortal = ({ children }: Props) => {
  const rootApp = document.querySelector("#root");
  return <>
    {
      rootApp === null
        ? null
        : createPortal(children, rootApp)
    }
  </>
}

export default GlobalPortal;