import { isPhone } from 'tools/devices';

import Icon from 'components/icons/Icon';

interface Props {
  isVisible: boolean;
}

const DashboardHelp = ({ isVisible }: Props) => {
  if (isPhone || !isVisible) return null;
  else
    return <div className='dashboard-help'>
      <div className="dashboard-help-wrap">
        <span className='help-text'>Click Here !</span>
        <i className="icon icon-dasharray">
          <svg width="4" height="44" viewBox="0 0 4 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 42V2" stroke="#F4F8FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
          </svg>
        </i>
        <Icon data='icon-mouse-instructions' name='diagram-helper' />
      </div>
    </div>
}

export default DashboardHelp;