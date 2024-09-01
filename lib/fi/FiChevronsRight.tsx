import { renderIcon } from "../index";
  export function FiChevronsRight(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M13 17 18 12 13 7"/><path d="M6 17 11 12 6 7"/>'
      }, props)
  };
  export default FiChevronsRight;