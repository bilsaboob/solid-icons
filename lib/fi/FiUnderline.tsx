import { renderIcon } from "../index";
  export function FiUnderline(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><path d="M4 21 20 21"/>'
      }, props)
  };
  export default FiUnderline;