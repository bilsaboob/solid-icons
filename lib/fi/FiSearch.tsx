import { renderIcon } from "../index";
  export function FiSearch(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M11 3A8 8 0 1 0 11 19 8 8 0 1 0 11 3z"/><path d="M21 21 16.65 16.65"/>'
      }, props)
  };
  export default FiSearch;