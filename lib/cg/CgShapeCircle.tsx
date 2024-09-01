import { renderIcon } from "../index";
  export function CgShapeCircle(props:any) {
      return renderIcon({
        a: {"fill":"none","viewBox":"0 0 24 24"},
        c: '<path fill="currentColor" fill-rule="evenodd" d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 3a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" clip-rule="evenodd"/>'
      }, props)
  };
  export default CgShapeCircle;