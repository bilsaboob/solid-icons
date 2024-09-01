import { renderIcon } from "../index";
  export function FiAnchor(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A3 3 0 1 0 12 8 3 3 0 1 0 12 2z"/><path d="M12 22 12 8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>'
      }, props)
  };
  export default FiAnchor;