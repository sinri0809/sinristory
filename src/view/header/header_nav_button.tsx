import React from 'react';
import { Link } from 'react-router-dom';

import { links } from 'routes/links';

interface LinkButtonProps {
  name: keyof typeof links;
  disabled?: boolean;
  onClick?: () => void;
  title?: string;
};

const LinkButton = ({ name, disabled, onClick, title }: LinkButtonProps ) => {
  return <Link 
    title={title ?? ""}
    to={links[name]}
    className='btn' 
    onClick={onClick} 
    aria-disabled={disabled}
  >
    { title ? title : name}
  </Link>
};

const LinkButtonHref =({name, onClick}: LinkButtonProps) =>( <a href={links[name]} 
    rel='noreferrer' 
    onClick={onClick} 
    target="_blank" 
    className="btn"
  >
    {name}
  </a>
);

export {LinkButton, LinkButtonHref};