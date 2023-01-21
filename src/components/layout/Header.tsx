import { Link } from "react-router-dom";

import { links } from "routes/links";

const Header = () => {
  return (
    <header>
      <h1>reference typescript cra</h1>
      <nav>
        <Link to={links.home}>home</Link>
        <Link to={links.profile}>profile</Link>
        <Link to={links.portfolio}>portfolio</Link>
        <Link to={links.gallery}>gallery</Link>
      </nav>

      <button>en/ko</button>

      <ul className="links">
        <li>velog</li>
        <li>github</li>
        <li>notion</li>
        <li>codepen</li>
      </ul>
    </header>
  )
};

export default Header;