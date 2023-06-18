import React, { MenuHTMLAttributes, LiHTMLAttributes } from "react";

interface ListProps extends MenuHTMLAttributes<HTMLUListElement>{}
interface ItemProps extends LiHTMLAttributes<HTMLLIElement>{}


const List = (props: ListProps) => {
  return <div className="list-wrap">
    <ul className="list">
      {props.children}
    </ul>
  </div>
}

const Item = (props: ItemProps) => {
  return <li className="item">
    {props.children}
  </li>
}

export { List, Item};