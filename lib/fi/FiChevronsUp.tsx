import { renderIcon } from "../index";
  export function FiChevronsUp(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M17 11 12 6 7 11"/><path d="M17 18 12 13 7 18"/>'
      }, props)
  };
  export default FiChevronsUp;