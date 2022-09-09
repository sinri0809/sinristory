import { Link } from 'react-router-dom';

interface Props {
  link?: string;
  className?: string;
  label: string;
}

const Button = ({ className, label, link }: Props) => {
  if (link) {
    return <div className={className + "__container"}>
      <Link to={link} className={className}>
        {label}
      </Link>
    </div>
  } else {
    return <div className={className + "__container"}>
      <button className={className}>
        {label}
      </button>
    </div>
  }
}

export default Button;