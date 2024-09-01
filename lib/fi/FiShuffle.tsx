import { renderIcon } from "../index";
  export function FiShuffle(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M16 3 21 3 21 8"/><path d="M4 20 21 3"/><path d="M21 16 21 21 16 21"/><path d="M15 15 21 21"/><path d="M4 4 9 9"/>'
      }, props)
  };
  export default FiShuffle;