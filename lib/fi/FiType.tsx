import { renderIcon } from "../index";
  export function FiType(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M4 7 4 4 20 4 20 7"/><path d="M9 20 15 20"/><path d="M12 4 12 20"/>'
      }, props)
  };
  export default FiType;