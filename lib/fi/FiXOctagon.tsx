import { renderIcon } from "../index";
  export function FiXOctagon(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2z"/><path d="M15 9 9 15"/><path d="M9 9 15 15"/>'
      }, props)
  };
  export default FiXOctagon;