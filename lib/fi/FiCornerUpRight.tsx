import { renderIcon } from "../index";
  export function FiCornerUpRight(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>'
      }, props)
  };
  export default FiCornerUpRight;