import { renderIcon } from "../index";
  export function FiLayers(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2 2 7 12 12 22 7 12 2z"/><path d="M2 17 12 22 22 17"/><path d="M2 12 12 17 22 12"/>'
      }, props)
  };
  export default FiLayers;