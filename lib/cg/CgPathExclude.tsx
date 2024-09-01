import { renderIcon } from "../index";
  export function CgPathExclude(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4H9v6H5V5Zm4 10v4h10V9h-4v6H9Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgPathExclude;