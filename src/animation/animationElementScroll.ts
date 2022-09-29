export function animationElementScroll (
  element: HTMLElement,
  top: number = 0,
  left: number = 0
) : void{

  element.scroll({
    top: top,
    left: left,
    behavior: 'smooth'
  })
}