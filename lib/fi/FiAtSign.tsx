import { renderIcon } from "../index";
  export function FiAtSign(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 8A4 4 0 1 0 12 16 4 4 0 1 0 12 8z"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>'
      }, props)
  };
  export default FiAtSign;