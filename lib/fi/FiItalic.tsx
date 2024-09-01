import { renderIcon } from "../index";
  export function FiItalic(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M19 4 10 4"/><path d="M14 20 5 20"/><path d="M15 4 9 20"/>'
      }, props)
  };
  export default FiItalic;