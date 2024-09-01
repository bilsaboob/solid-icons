import { renderIcon } from "../index";
  export function FiArchive(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M21 8 21 21 3 21 3 8"/><path d="M1 3H23V8H1z"/><path d="M10 12 14 12"/>'
      }, props)
  };
  export default FiArchive;