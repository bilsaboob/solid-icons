import { renderIcon } from "../index";
  export function CgPathDivide(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M5 5h10v4H9v6H5V5Z"/><path fill="currentColor" d="M9 15v4h10V9h-4v6H9Z"/><path fill="currentColor" d="M10 10h4v4h-4v-4Z"/>'
      }, props)
  };
  export default CgPathDivide;