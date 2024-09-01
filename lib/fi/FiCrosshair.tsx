import { renderIcon } from "../index";
  export function FiCrosshair(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M22 12 18 12"/><path d="M6 12 2 12"/><path d="M12 6 12 2"/><path d="M12 22 12 18"/>'
      }, props)
  };
  export default FiCrosshair;