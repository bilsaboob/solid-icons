import { renderIcon } from "../index";
  export function CgShapeTriangle(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M11.66 5 3 20h17.32L11.66 5Zm0 6-3.464 6h6.928l-3.464-6Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgShapeTriangle;