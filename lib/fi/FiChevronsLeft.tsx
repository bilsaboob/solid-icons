import { renderIcon } from "../index";
  export function FiChevronsLeft(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M11 17 6 12 11 7"/><path d="M18 17 13 12 18 7"/>'
      }, props)
  };
  export default FiChevronsLeft;