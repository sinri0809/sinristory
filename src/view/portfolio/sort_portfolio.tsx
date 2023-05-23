import React from "react";
import { useRecoilState } from 'recoil';
import { portfolioUI, sortUI } from 'store/portfolio.store';

import Sort, { SortItem, SortList } from "components/layout/SortList";

interface Props {
  sortList?: Array<string>
}

const SortPortfolio = (props: Props) => {
  const [sortIndex, setSortIndex] = useRecoilState(sortUI);
  const [portfolioList, setPortfolioList] = useRecoilState(portfolioUI);

  return <>
    <Sort>
      <h2 className='emoji'>️🏄‍♀️</h2>
      <SortList>
        {
          portfolioList.map((item, index) => {
          return <SortItem 
            key={index}
            aria-checked={index === sortIndex}
            textType="name-component"
            onClick={() => {
              setSortIndex(index)
            }}
          >
            {item}
          </SortItem>
        })
        }
      </SortList>
    </Sort>
  </>
}

export default SortPortfolio;