import { renderIcon } from "../index";
  export function CgPathTrim(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" d="M5 5h10v3H8v7H5V5Z"/><path fill="currentColor" d="M19 9H9v10h10V9Z"/>'
      }, props)
  };
  export default CgPathTrim;