import { renderIcon } from "../index";
  export function FiSend(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/>'
      }, props)
  };
  export default FiSend;