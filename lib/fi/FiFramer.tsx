import { renderIcon } from "../index";
  export function FiFramer(props:any) {
      return renderIcon({
        a: {"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24"},
        c: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/>'
      }, props)
  };
  export default FiFramer;