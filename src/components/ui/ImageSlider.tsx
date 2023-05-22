import React, {useState} from 'react';

import { AreaHTMLAttributes, ImgHTMLAttributes } from 'react';
import IconButton from './IconButton';
import ImageLoader from 'components/container/ImageLoader';
import styled from '@emotion/styled';

// interface Props extends ImgHTMLAttributes
interface Props extends AreaHTMLAttributes<HTMLDivElement> {
  imageList: Array<Record<string, string>>;
}

const ImageSlider = (props: Props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderLength = props.imageList.length;

  const addIndex = () => {
    if(sliderIndex < sliderLength) {
      setSliderIndex(sliderIndex + 1)
    }
  }

  const subtractIndex = () => {
    if(sliderIndex !== -1) {
      setSliderIndex(sliderIndex - 1)
    }
  }

  const setIndex = (number: number) => {
    setSliderIndex(number);
  }

  return (
    <div className="image-slider">
      <ImageList imageList={props.imageList} imageIndex={sliderIndex} />
      {
        sliderLength > 1 && <>
          <SliderController moveRight={addIndex} moveLeft={subtractIndex} />
          <SliderPagination setIndex={setIndex} length={sliderLength} />
        </> 
      }
    </div>
  );
};

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>{
  imageList: Array<Record<string, string>>;
  imageIndex: number;
}

const ImageList = (props: ImageProps) => {
  return (
    <section 
      role='presentation'
      className="image-slider-container"
    >
      <ul className="image-list">
        {
          props.imageList.map((item, index) => {
            return <li 
              key={index} className='image-item'
              style={{ transform: `translateX(-${100 * props.imageIndex}%)` }}
            ><ImageLoader src={item.src} alt={item.alt} index={index} />
            </li>
          })
        }
      </ul>
    </section>
  );
};

interface ControlProps {
  moveRight: () => void;
  moveLeft: () => void;
}

const SliderController = (props: ControlProps) => {
  return (
    <div className="slider-controller">
      <IconButton
        data="icon-arrow-left"
        name="왼쪽으로 이동"
        onClick={props.moveLeft}
      />
      <IconButton
        data="icon-arrow-right"
        name="오른쪽으로 이동"
        onClick={props.moveRight}
      />
    </div>
  );
};

interface PaginationProps {
  setIndex: (number: number)=>void;
  length: number;
}

const SliderPagination = (props: PaginationProps) => {
  const dummy = Array.from({length: props.length}, (_, index) => index);
  return (
    <ul className="slider-pagination">
      {
        dummy.map((_, index) => {
          return <li key={index}>
            <button 
              className={'btn btn-pagination'}
              onClick={()=>props.setIndex(index)}
            >
              <IconDot />
            </button>    
          </li>
        }) 
      }
    </ul>
  );
};

export default ImageSlider;
export {ImageList};

const IconDot = styled.i`
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: white;
  opacity: 1;
`