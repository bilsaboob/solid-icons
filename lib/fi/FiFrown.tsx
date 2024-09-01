import { renderIcon } from "../index";
  export function FiFrown(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><path d="M9 9 9.01 9"/><path d="M15 9 15.01 9"/>'
      }, props)
  };
  export default FiFrown;