import { renderIcon } from "../index";
  export function FiActivity(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M22 12 18 12 15 21 9 3 6 12 2 12"/>'
      }, props)
  };
  export default FiActivity;