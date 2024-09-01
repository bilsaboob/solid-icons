import { renderIcon } from "../index";
  export function FiToggleLeft(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><path d="M8 9A3 3 0 1 0 8 15 3 3 0 1 0 8 9z"/>'
      }, props)
  };
  export default FiToggleLeft;