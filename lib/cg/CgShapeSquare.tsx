import { renderIcon } from "../index";
  export function CgShapeSquare(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M17 7H7v10h10V7ZM4 4v16h16V4H4Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgShapeSquare;