import { renderIcon } from "../index";
  export function FiTarget(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M12 6A6 6 0 1 0 12 18 6 6 0 1 0 12 6z"/><path d="M12 10A2 2 0 1 0 12 14 2 2 0 1 0 12 10z"/>'
      }, props)
  };
  export default FiTarget;