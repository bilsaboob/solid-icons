import { renderIcon } from "../index";
  export function FiMeh(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M8 15 16 15"/><path d="M9 9 9.01 9"/><path d="M15 9 15.01 9"/>'
      }, props)
  };
  export default FiMeh;