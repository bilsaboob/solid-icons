import { renderIcon } from "../index";
  export function FiChevronsDown(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M7 13 12 18 17 13"/><path d="M7 6 12 11 17 6"/>'
      }, props)
  };
  export default FiChevronsDown;