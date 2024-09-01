import { renderIcon } from "../index";
  export function FiMousePointer(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6"/>'
      }, props)
  };
  export default FiMousePointer;