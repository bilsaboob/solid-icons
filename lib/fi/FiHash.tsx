import { renderIcon } from "../index";
  export function FiHash(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M4 9 20 9"/><path d="M4 15 20 15"/><path d="M10 3 8 21"/><path d="M16 3 14 21"/>'
      }, props)
  };
  export default FiHash;