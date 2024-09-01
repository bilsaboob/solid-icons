import { renderIcon } from "../index";
  export function FiEye(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><path d="M12 9A3 3 0 1 0 12 15 3 3 0 1 0 12 9z"/>'
      }, props)
  };
  export default FiEye;