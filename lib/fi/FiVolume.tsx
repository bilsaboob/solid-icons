import { renderIcon } from "../index";
  export function FiVolume(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M11 5 6 9 2 9 2 15 6 15 11 19 11 5z"/>'
      }, props)
  };
  export default FiVolume;