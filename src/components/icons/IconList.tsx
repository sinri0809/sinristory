const IconArrowDown = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Icon/Arrow/DownSide</title>
    <path d="M9.22852 14.4932C9.6285 14.9782 10.3714 14.9782 10.7714 14.4933L14.8363 9.56487C15.3742 8.91263 14.9103 7.92859 14.0648 7.92859H5.93512C5.08965 7.92859 4.6257 8.91263 5.16366 9.56487L9.22852 14.4932Z" fill="#DFE2E5" />
  </svg>
}

const IconClose = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Icon/Close/Clear</title>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.9322 5.05027C4.68457 5.29878 4.68457 5.7017 4.9322 5.95022L8.96767 10L4.93224 14.0498C4.6846 14.2983 4.6846 14.7013 4.93224 14.9498C5.17987 15.1983 5.58137 15.1983 5.829 14.9498L9.86444 10.9L13.8999 14.9498C14.1475 15.1983 14.549 15.1983 14.7966 14.9498C15.0443 14.7012 15.0443 14.2983 14.7966 14.0498L10.7612 10L14.7967 5.95023C15.0443 5.70171 15.0443 5.29879 14.7967 5.05027C14.549 4.80176 14.1475 4.80176 13.8999 5.05027L9.86444 9.10008L5.82897 5.05027C5.58134 4.80175 5.17984 4.80175 4.9322 5.05027Z" fill="#797979"/>
  </svg>
}

const IconLike = () => {
  return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Icon/Like/Heart</title>
    <path d="M17.5686 9.78222C17.6583 9.93538 17.8225 10.0295 18 10.0295C18.1775 10.0295 18.3417 9.93538 18.4314 9.78222C19.1944 8.47981 21.495 6.12279 24.8818 6.55186C29.2205 7.1015 31.9797 11.5283 31.4311 15.4203C31.0903 17.8382 29.6755 20.1419 27.7518 22.3346C25.8309 24.5244 23.45 26.5519 21.2409 28.432L21.2326 28.439C20.074 29.425 18.9602 30.373 18 31.2741C17.0398 30.373 15.926 29.4251 14.7675 28.4391L14.7591 28.432C12.55 26.5519 10.1691 24.5244 8.24816 22.3346C6.32455 20.1419 4.90969 17.8382 4.56887 15.4203C4.02027 11.5283 6.77954 7.1015 11.1182 6.55186C14.505 6.12279 16.8056 8.47981 17.5686 9.78222Z" stroke="white" strokeLinejoin="round"/>
  </svg>
}

const IconDrawer = () => {
  return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect className="rect00" x="7" y="7" width="6" height="6" rx="2" fill="white" />
    <rect className="rect10" x="7" y="15" width="6" height="6" rx="2" fill="white" />
    <rect className="rect20" x="7" y="23" width="6" height="6" rx="2" fill="white" />
    <rect className="rect01" x="15" y="7" width="6" height="6" rx="2" fill="white" />
    <rect className="rect11" x="15" y="15" width="6" height="6" rx="2" fill="white" />
    <rect className="rect21" x="15" y="23" width="6" height="6" rx="2" fill="white" />
    <rect className="rect02" x="23" y="7" width="6" height="6" rx="2" fill="white" />
    <rect className="rect12" x="23" y="15" width="6" height="6" rx="2" fill="white" />
    <rect className="rect22" x="23" y="23" width="6" height="6" rx="2" fill="white" />
  </svg>
}

const IconDayNight = () => {
  return <svg className="svg-day-night" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      className="eclipse"
      name="eclipse" cx="21" cy="21" r="9" fill='white'
    // mask="url(#eclipse)" 
    />
    <circle
      className="sun-light"
      name="sun-light"
      cx="21" cy="21" r="18" stroke="white" strokeWidth="6" strokeDasharray="2 12" />
    <circle
      className="bg-light"
      name="bg-light"
      cx="21" cy="21" r="18"
      fill="url(#paint0_radial_5_50)" fillOpacity="0.5"
    />
    <defs>
      <radialGradient id="paint0_radial_5_50" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(18)">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <mask id="eclipse">
        <rect width="42" height="42" fill="white" />
        <circle className="eclipse-move" r="9" cx="14" cy="14" fill="black" />
      </mask>
    </defs>
  </svg>
}

const IconRadio = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle className="radio-area" opacity="0" cx="10" cy="10" r="10" fill="#F4F8FF"/>
  <circle className="radio-stroke" cx="10" cy="10" r="7.5" stroke="#F4F8FF"/>
  <circle className="radio-core" cx="10" cy="10" r="4" fill="#F4F8FF"/>
  </svg>
}

const IconCheckbox = () => {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect className="checkbox-bg" x="1" y="1" width="18" height="18" rx="2" fill="#2F78E3"/>
    <path className="checkbox-line" d="M5 11L9 15L15 6" stroke="#F4F8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}


const IconList = {
  'icon-close': <IconClose />,
  'icon-theme': <IconDayNight />,
  'icon-drawer': <IconDrawer />,
  'icon-arrow-down': <IconArrowDown />,
  'icon-like': <IconLike />,
  'icon-radio': <IconRadio />,
  'icon-checkbox': <IconCheckbox />
}

export default IconList;

export {
  IconArrowDown,
  IconClose,
  IconLike,
  IconDrawer,
  IconDayNight,
  IconRadio,
  IconCheckbox,
};