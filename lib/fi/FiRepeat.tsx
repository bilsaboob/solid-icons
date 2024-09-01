import { renderIcon } from "../index";
  export function FiRepeat(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'
      }, props)
  };
  export default FiRepeat;