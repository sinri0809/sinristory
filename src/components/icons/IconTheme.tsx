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
      cx="21" cy="21" r="18" stroke="white" strokeWidth="6" stroke-dasharray="2 12" />
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

export default IconDayNight;