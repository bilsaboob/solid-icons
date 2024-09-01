import { renderIcon } from "../index";
  export function FiNavigation(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M3 11 22 2 13 21 11 13 3 11z"/>'
      }, props)
  };
  export default FiNavigation;