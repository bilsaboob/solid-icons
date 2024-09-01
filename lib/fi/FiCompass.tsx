import { renderIcon } from "../index";
  export function FiCompass(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M12 2A10 10 0 1 0 12 22 10 10 0 1 0 12 2z"/><path d="M16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76z"/>'
      }, props)
  };
  export default FiCompass;