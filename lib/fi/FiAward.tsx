import { renderIcon } from "../index";
  export function FiAward(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 1A7 7 0 1 0 12 15 7 7 0 1 0 12 1z"/><path d="M8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
      }, props)
  };
  export default FiAward;