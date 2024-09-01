import { renderIcon } from "../index";
  export function FiArrowRight(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M5 12 19 12"/><path d="M12 5 19 12 12 19"/>'
      }, props)
  };
  export default FiArrowRight;