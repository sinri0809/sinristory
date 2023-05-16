import React from "react";

import Sort, { SortItem, SortList } from "components/layout/SortList";

const SortPortfolio = () => {
  return <>
    <Sort>
      <h2 className='emoji'>️🏄‍♀️</h2>
      <SortList>
        <SortItem>Switch</SortItem>
        <SortItem>Dropdown</SortItem>
        <SortItem>Button</SortItem>
        <SortItem>InputField</SortItem>
        <SortItem>Icon</SortItem>
      </SortList>
    </Sort>
  </>
}

export default SortPortfolio;