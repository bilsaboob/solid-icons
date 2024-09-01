import { renderIcon } from "../index";
  export function FiArrowUpRight(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M7 17 17 7"/><path d="M7 7 17 7 17 17"/>'
      }, props)
  };
  export default FiArrowUpRight;