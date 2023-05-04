// import { useState } from "react";

import { ImgHTMLAttributes } from "react";
import IconButton from "./IconButton";

// interface Props extends ImgHTMLAttributes
// interface Props extends 

const ImageSlider = () => {
  // const [sliderIndex, setSliderIndex] = useState(0);
  // const sliderLength = arrImages.length;

  return <div className="image-slider">
    {/* <ImageSlider.ImageContainer /> */}
    {/* {
      sliderLength > 1 && <>
        <SliderController />
        <SliderPagination />
      </> 
    } */}
  </div>
}

const Image = () => {
  return <div className="image-slider-container">
    <ul className="image-items-list">
      {/* {
        arrImages.map((image, index) => {
          return <li 
            key={index}
            className="image-item"
            style={{ transform: `translateX(-${100 * sliderIndex}%)` }}
          >
            <img
              className="image"
              src=""
              alt={image.name}
              // src={require(`assets/image_slider/${image.name}.${image.fileExtension}`).default}
              // onLoad={onLoadImg}
            />
          </li> 
        })
      } */}
    </ul>
  </div> 
}

const SliderController = () => {
  return <div className="slider-controller">
    <IconButton data="icon-arrow-left" name="왼쪽으로 이동" onClick={() => {}} />
    <IconButton data="icon-arrow-right" name="오른쪽으로 이동" onClick={() => {}} />
  </div>
}

const SliderPagination = () => {
  return <ul className="slider-pagination">
    <li className="item-dot"><i className="icon">dot</i></li>
    <li className="item-dot"><i className="icon">dot</i></li>
  </ul>
}

export default ImageSlider;
