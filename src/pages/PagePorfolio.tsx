import { Link } from "react-router-dom";
import { links } from "routes/links";

const PagePortfolio = () => {
  return <div className="portfolio">
    <Link to={links.home}>to home</Link>
  </div>
}

export default PagePortfolio;