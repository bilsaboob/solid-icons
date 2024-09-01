import { renderIcon } from "../index";
  export function FiArrowUp(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 19 12 5"/><path d="M5 12 12 5 19 12"/>'
      }, props)
  };
  export default FiArrowUp;