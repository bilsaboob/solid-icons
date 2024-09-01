import { renderIcon } from "../index";
  export function FiCornerDownLeft(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>'
      }, props)
  };
  export default FiCornerDownLeft;