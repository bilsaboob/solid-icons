import { renderIcon } from "../index";
  export function FiPause(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M6 4H10V20H6z"/><path d="M14 4H18V20H14z"/>'
      }, props)
  };
  export default FiPause;