import { renderIcon } from "../index";
  export function FiCornerRightUp(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M10 9 15 4 20 9"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/>'
      }, props)
  };
  export default FiCornerRightUp;