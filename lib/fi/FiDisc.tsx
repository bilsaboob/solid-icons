import { renderIcon } from "../index";
  export function FiDisc(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M12 9A3 3 0 1 0 12 15 3 3 0 1 0 12 9z"/>'
      }, props)
  };
  export default FiDisc;