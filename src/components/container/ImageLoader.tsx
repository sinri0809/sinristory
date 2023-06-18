import React, { useState, useEffect, ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  index: number;
}

const ImageLoader = (props: Props) => {
  const { src, alt} = {...props};

  const imageSrc = () => {
    return require(src).default;
  };

  // console.log({src,alt})
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = src;

  //   const handleLoad = () => {
  //     setIsLoading(false);
  //   };

  //   const handleError = () => {
  //     setIsLoading(false);
  //     setIsError(true);
  //   };

  //   image.addEventListener('load', handleLoad);
  //   image.addEventListener('error', handleError);

  //   return () => {
  //     image.removeEventListener('load', handleLoad);
  //     image.removeEventListener('error', handleError);
  //   };
  // }, [src]);

  // if (isLoading) {
  //   return <div>loading</div>
  // }

  // if (isError) {
  //   return <img
  //     className="image"
  //     src={require('assets/imgs/sample/1-1.png')}
  //     alt='sample'
  //   />
  // }

  return <img 
    src={require('assets/imgs/sample/1-1.png')}
    alt={alt} 
    // onLoadStart={()=>console.log("load start")}
  />;
};

export default ImageLoader;