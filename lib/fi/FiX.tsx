import { renderIcon } from "../index";
  export function FiX(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M18 6 6 18"/><path d="M6 6 18 18"/>'
      }, props)
  };
  export default FiX;