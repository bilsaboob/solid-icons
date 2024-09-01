import { renderIcon } from "../index";
  export function FiGrid(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M3 3H10V10H3z"/><path d="M14 3H21V10H14z"/><path d="M14 14H21V21H14z"/><path d="M3 14H10V21H3z"/>'
      }, props)
  };
  export default FiGrid;