import { renderIcon } from "../index";
  export function FiSlash(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M4.93 4.93 19.07 19.07"/>'
      }, props)
  };
  export default FiSlash;