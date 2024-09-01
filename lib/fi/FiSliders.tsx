import { renderIcon } from "../index";
  export function FiSliders(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M4 21 4 14"/><path d="M4 10 4 3"/><path d="M12 21 12 12"/><path d="M12 8 12 3"/><path d="M20 21 20 16"/><path d="M20 12 20 3"/><path d="M1 14 7 14"/><path d="M9 8 15 8"/><path d="M17 16 23 16"/>'
      }, props)
  };
  export default FiSliders;