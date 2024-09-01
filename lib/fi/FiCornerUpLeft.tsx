import { renderIcon } from "../index";
  export function FiCornerUpLeft(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>'
      }, props)
  };
  export default FiCornerUpLeft;