import React, { useState } from 'react';

import { skillsList } from 'store/dashboard.store';

import Icon from 'components/icons/Icon';
import { TreeContainer, TreeItem } from './diagam_wrap';

const DashboardTree = () => {
  const [test, setTest] = useState(false);

  const onClickTest = () => {
    setTest(!test);
  };
  return (
    <>
      <h2 data-depth={0} className="tree-title">
        UX Engineer
      </h2>
      <TreeContainer depth={1} id='list-depth-1-uxe'>
        <TreeItem>
          <TreeItem.ToggleButton 
            id='list-depth-2-develop'
            category='Develop'  
            aria-expanded={test}
            onClick={onClickTest}
          />
          <TreeContainer depth={2} id='list-depth-2-develop'>
            {
              skillsList[0].list[0].list.map(item => <TreeItem>
                <TreeItem.ToggleButton 
                  category={item.name}
                  // onClick={onClickTest}
                />  
              </TreeItem>)
            }
          </TreeContainer>
        </TreeItem>

        <TreeItem>
          <TreeItem.ToggleButton 
            id='list-depth-2'
            category={skillsList[0].list[1].name}  
            aria-expanded={false}
          />
        </TreeItem>

        <TreeItem>
          <TreeItem.ToggleButton 
            id='list-depth-2'
            category={skillsList[0].list[2].name}  
            aria-expanded={false}
          />
        </TreeItem>

        <TreeItem>
          <TreeItem.ToggleButton 
            id='list-depth-2'
            category={skillsList[0].list[3].name}  
            aria-expanded={false}
          />
        </TreeItem>

        <TreeItem>
          <TreeItem.ToggleButton 
            id='list-depth-2'
            category={skillsList[0].list[4].name}  
            aria-expanded={true}
          />
        </TreeItem>
      </TreeContainer>
    </>
  );
};

export default DashboardTree;
