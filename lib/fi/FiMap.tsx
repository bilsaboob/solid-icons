import { renderIcon } from "../index";
  export function FiMap(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6z"/><path d="M8 2 8 18"/><path d="M16 6 16 22"/>'
      }, props)
  };
  export default FiMap;