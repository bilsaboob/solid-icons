import { renderIcon } from "../index";
  export function FiPlusCircle(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M12 8 12 16"/><path d="M8 12 16 12"/>'
      }, props)
  };
  export default FiPlusCircle;