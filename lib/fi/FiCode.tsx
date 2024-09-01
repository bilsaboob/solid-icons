import { renderIcon } from "../index";
  export function FiCode(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M16 18 22 12 16 6"/><path d="M8 6 2 12 8 18"/>'
      }, props)
  };
  export default FiCode;