import { renderIcon } from "../index";
  export function FiArrowLeft(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M19 12 5 12"/><path d="M12 19 5 12 12 5"/>'
      }, props)
  };
  export default FiArrowLeft;