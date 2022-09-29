import { animationElementScroll } from 'animation/animationElementScroll';

interface Props {
  x?: number,
  y?: number
}

const PageNav = ({ x, y } : Props) => {
  
  const renderButtonPair = () => {
    if(x === 0 && y === 0){ // 0
      return (<> 
        <PageNav.Button label="go bottom" destinationIndex={2} />
        <PageNav.Button label="go right" destinationIndex={1} />
      </>);
    } else if (x === 1 && y === 0){ // 1
      return (<>
        <PageNav.Button label="go bottom" destinationIndex={3} />
        <PageNav.Button label="go left" destinationIndex={0} />
      </>);
    } else if (x === 0 && y === 1){ // 2
      return (<>
        <PageNav.Button label="go top" destinationIndex={0} />
        <PageNav.Button label="go right" destinationIndex={3} />
      </>);
    } else if (x === 1 && y === 1){ // 3
      return (<>
        <PageNav.Button label="go top" destinationIndex={1} />
        <PageNav.Button label="go left" destinationIndex={2} />
      </>);
    } else {
      return (<>err</>);
    }
  }

  return (
    <nav className="arrow_wrapper">
      {renderButtonPair()}
    </nav>
  );
}

interface ChildProps {
  label: string,
  destinationIndex: number
}

PageNav.Button = ({ 
  label = "default", 
  destinationIndex
} : ChildProps) => {

  const onClickArrowButton = (index: number) => {
    const elementHome = document.querySelector(".home__wrapper") as HTMLElement;
    const elementHeight = elementHome.clientHeight;
    const elementWidth = elementHome.clientWidth;

    const coordinateArr = [
      { // top left (true, true) - 0
        top: 0,
        left: 0
      },
      { // top right (true, false) - 1
        top: 0,
        left: elementWidth
      },
      { // bottom left (false, true) - 2
        top: elementHeight,
        left: 0
      },
      { // bottom right (false, false) - 3
        top: elementHeight,
        left: elementWidth
      }
    ];

    const destination = coordinateArr[index];

    animationElementScroll(elementHome, destination.top, destination.left);
  };

  return (
    <button
      className="btn btn-page-scroll"
      onClick={(): void => onClickArrowButton(destinationIndex)}
    >
      {label}
    </button>
  );
}

export default PageNav;