import React, { ButtonHTMLAttributes, LiHTMLAttributes } from "react";

// TODO: aria-sort https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort
interface Props extends LiHTMLAttributes<HTMLUListElement> {

}

const Sort = (props: Props) => {
  return <div className="sort-container">
    {props.children}
  </div>
}

const SortList = (props: Props) => {
  return <div className="sort-list-wrap">
    <ul className="sort-list"
    >
      {props.children}
    </ul>
  </div>
}

interface SortItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textType?: 'name-component' | "";
}

const SortItem = (props: SortItemProps) => {
  return <li className="sort-item">
    <button
      role="checkbox"
      aria-checked={false}
      defaultChecked={false}
      type='button'
      className={`btn btn-sort ${props.textType}`}
    >
      {props.children}
    </button>
  </li>
}

export default Sort;
export { SortList, SortItem };